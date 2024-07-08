import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";

interface Word {
  word: string;
  lang: "th" | "en";
}

interface WordCardProps {
  word: Word;
  timeLeft?: number;
  isLocked: boolean;
  onWordClick: (word: Word) => void;
  onToggleLock: (word: Word) => void;
}

const WordCard: React.FC<WordCardProps> = ({
  word,
  timeLeft,
  isLocked,
  onWordClick,
  onToggleLock,
}) => (
  <Paper
    key={word.word}
    onClick={() => onWordClick(word)}
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
        onToggleLock(word);
      }}
    >
      {isLocked ? (
        <LockIcon fontSize="small" />
      ) : (
        <LockOpenIcon fontSize="small" />
      )}
    </IconButton>
  </Paper>
);

export default WordCard;
