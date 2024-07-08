import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Words from "./words.json";
import WordList from "../components/WordList";

interface Word {
  word: string;
  lang: "th" | "en";
}

const words: Word[] = Words as Word[];

const CheckList: React.FC = () => {
  const [vocabulary, setVocabulary] = React.useState<Word[]>(words);
  const [thaiWords, setThaiWords] = React.useState<Word[]>([]);
  const [englishWords, setEnglishWords] = React.useState<Word[]>([]);
  const [lockedWords, setLockedWords] = React.useState<Set<string>>(new Set());
  const [timers, setTimers] = React.useState<Record<string, number>>({});

  const handleWordClick = (word: Word) => {
    if (lockedWords.has(word.word)) return;

    if (vocabulary.includes(word)) {
      setVocabulary(vocabulary.filter((w) => w.word !== word.word));
      if (word.lang === "th") {
        setThaiWords([...thaiWords, word]);
      } else {
        setEnglishWords([...englishWords, word]);
      }
      startTimer(word);
    } else {
      setThaiWords(thaiWords.filter((w) => w.word !== word.word));
      setEnglishWords(englishWords.filter((w) => w.word !== word.word));
      setVocabulary([...vocabulary, word]);
      clearTimer(word);
    }
  };

  const toggleLock = (word: Word) => {
    setLockedWords((prev) => {
      const newLockedWords = new Set(prev);
      if (newLockedWords.has(word.word)) {
        newLockedWords.delete(word.word);
      } else {
        newLockedWords.add(word.word);
      }
      return newLockedWords;
    });
  };

  const startTimer = (word: Word) => {
    setTimers((prev) => ({ ...prev, [word.word]: 5 }));
  };

  const clearTimer = (word: Word) => {
    setTimers((prev) => {
      const newTimers = { ...prev };
      delete newTimers[word.word];
      return newTimers;
    });
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prev) => {
        const newTimers = { ...prev };
        Object.keys(newTimers).forEach((word) => {
          if (!lockedWords.has(word)) {
            newTimers[word] -= 1;
            if (newTimers[word] <= 0) {
              const wordObj = words.find((w) => w.word === word);
              if (wordObj) {
                setThaiWords((prev) => prev.filter((w) => w.word !== word));
                setEnglishWords((prev) => prev.filter((w) => w.word !== word));
                setVocabulary((prev) => [...prev, wordObj]);
              }
              delete newTimers[word];
            }
          }
        });
        return newTimers;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [lockedWords]);

  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Box sx={{ flex: 1, mx: 0.5 }}>
          <Typography sx={{ textAlign: "center" }}>คำศัพท์</Typography>
        </Box>
        <Box sx={{ flex: 1, mx: 0.5 }}>
          <Typography sx={{ textAlign: "center" }}>ภาษาไทย</Typography>
        </Box>
        <Box sx={{ flex: 1, mx: 0.5 }}>
          <Typography sx={{ textAlign: "center" }}>ภาษาอังกฤษ</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <WordList
          title=""
          words={vocabulary}
          timers={timers}
          lockedWords={lockedWords}
          onWordClick={handleWordClick}
          onToggleLock={toggleLock}
        />
        <WordList
          title=""
          words={thaiWords}
          timers={timers}
          lockedWords={lockedWords}
          onWordClick={handleWordClick}
          onToggleLock={toggleLock}
        />
        <WordList
          title=""
          words={englishWords}
          timers={timers}
          lockedWords={lockedWords}
          onWordClick={handleWordClick}
          onToggleLock={toggleLock}
        />
      </Box>
    </Box>
  );
};

export default CheckList;
