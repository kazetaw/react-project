import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Words from "./words.json";
import WordList from "../components/WordList";
import "./styles/Checklist.css";
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
  const containerStyle: React.CSSProperties = {
    background: "#fdfffd",
    borderRadius: 9,

  };

  return (
    <div className="bodychecklist">
    <Box sx={{ p: 2 }}>
      <h1 className="text-3xl font-bold text-center justify-center mt-10 mb-10">
        คำศัพท์แยกภาษา
      </h1>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Typography
            style={containerStyle}
            variant="h6"
            align="center"
            gutterBottom
          >
            คำศัพท์
          </Typography>
          <WordList
            title=""
            words={vocabulary}
            timers={timers}
            lockedWords={lockedWords}
            onWordClick={handleWordClick}
            onToggleLock={toggleLock}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            style={containerStyle}
            variant="h6"
            align="center"
            gutterBottom
          >
            ภาษาไทย
          </Typography>
          <WordList
            title=""
            words={thaiWords}
            timers={timers}
            lockedWords={lockedWords}
            onWordClick={handleWordClick}
            onToggleLock={toggleLock}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            style={containerStyle}
            variant="h6"
            align="center"
            gutterBottom
          >
            ภาษาอังกฤษ
          </Typography>
          <WordList
            title=""
            words={englishWords}
            timers={timers}
            lockedWords={lockedWords}
            onWordClick={handleWordClick}
            onToggleLock={toggleLock}
          />
        </Grid>
      </Grid>
    </Box></div>
  );
};

export default CheckList;
