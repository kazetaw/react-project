import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

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
      borderBottom="1px solid #eee"
      bgcolor="#fff"
      boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1)"
      borderRadius="8px"
      marginBottom={2}
    >
      <Typography flexGrow={1} marginRight={2} color="textSecondary">
        {todo}
      </Typography>
      <Tooltip title="Edit">
        <IconButton
          color="inherit"
          onClick={() => setIsEditing(true)}
          sx={{ marginRight: 1 }}
        >
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton color="error" onClick={() => removeTodo(index)}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>

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
          <Button
            variant="contained"
            color="primary"
            onClick={handleEdit}
            sx={{ backgroundColor: "#4caf50", color: "#fff" }}
          >
            Save
          </Button>
          <Button
            variant="contained"
            color="inherit"
            onClick={() => setIsEditing(false)}
            sx={{ backgroundColor: "#f44336", color: "#fff" }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TodoItem;
