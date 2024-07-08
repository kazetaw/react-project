import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";

interface TodoItemProps {
  todo: string;
  index: number;
  removeTodo: (index: number) => void;
  editTodo: (index: number, newTodo: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  index,
  removeTodo,
  editTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState(todo);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(index, newTodo);
    }
    setIsEditing(!isEditing);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={2}
      borderBottom="1px solid #ddd"
      marginBottom={2}
    >
      <Typography flexGrow={1} marginRight={2}>
        {todo}
      </Typography>
      <Button
        variant="contained"
        color="warning"
        onClick={() => setIsEditing(true)}
        sx={{ marginRight: 1 }}
      >
        Edit
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => removeTodo(index)}
      >
        Remove
      </Button>

      <Dialog open={isEditing} onClose={() => setIsEditing(false)}>
        <DialogTitle>Edit Todo</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="warning" onClick={handleEdit}>
            Save
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TodoItem;
