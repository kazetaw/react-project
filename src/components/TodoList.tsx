import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index: number, newTodo: string) => {
    const newTodos = [...todos];
    newTodos[index] = newTodo;
    setTodos(newTodos);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Todo List
      </Typography>
      <Box display="flex" alignItems="center" marginBottom={2}>
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="New Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button
          variant="contained"
          color="success"
          onClick={addTodo}
          sx={{ marginLeft: 2, height: "56px" }} // Ensure the height matches the TextField
        >
          Add
        </Button>
      </Box>
      <Box>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        ))}
      </Box>
    </Container>
  );
};

export default TodoList;
