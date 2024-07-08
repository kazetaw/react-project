import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WordCard from "./WordCard";

interface Word {
  word: string;
  lang: "th" | "en";
}

interface WordListProps {
  title: string;
  words: Word[];
  timers: Record<string, number>;
  lockedWords: Set<string>;
  onWordClick: (word: Word) => void;
  onToggleLock: (word: Word) => void;
}

const WordList: React.FC<WordListProps> = ({
  title,
  words,
  timers,
  lockedWords,
  onWordClick,
  onToggleLock,
}) => (
  <Box sx={{ flex: 1, mx: 0.5 }}>
    <Typography sx={{ textAlign: "center" }}>{title}</Typography>
    {words.map((word) => (
      <WordCard
        key={word.word}
        word={word}
        timeLeft={timers[word.word]}
        isLocked={lockedWords.has(word.word)}
        onWordClick={onWordClick}
        onToggleLock={onToggleLock}
      />
    ))}
  </Box>
);

export default WordList;
