import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Words from "./words.json";
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

  const renderWord = (word: Word, timeLeft?: number) => (
    <Paper
      key={word.word}
      onClick={() => handleWordClick(word)}
      sx={{
        cursor: "pointer",
        padding: 1,
        margin: 1,
        textAlign: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: 2,
        fontSize: "0.875rem",
      }}
      elevation={2}
    >
      {word.word}
      {timeLeft !== undefined && (
        <Typography
          variant="caption"
          sx={{ position: "absolute", top: 5, right: 5, zIndex: 1 }}
        >
          {timeLeft}
        </Typography>
      )}
      <IconButton
        size="small"
        sx={{ position: "absolute", top: 5, right: 5, zIndex: 1 }}
        onClick={(e) => {
          e.stopPropagation();
          toggleLock(word);
        }}
      >
        {lockedWords.has(word.word) ? (
          <LockIcon fontSize="small" />
        ) : (
          <LockOpenIcon fontSize="small" />
        )}
      </IconButton>
    </Paper>
  );

  return (
    <>
      {" "}
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
          <Box sx={{ flex: 1, mx: 0.5 }}>
            {vocabulary.map((word) => renderWord(word))}
          </Box>
          <Box sx={{ flex: 1, mx: 0.5 }}>
            {thaiWords.map((word) => renderWord(word, timers[word.word]))}
          </Box>
          <Box sx={{ flex: 1, mx: 0.5 }}>
            {englishWords.map((word) => renderWord(word, timers[word.word]))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CheckList;
