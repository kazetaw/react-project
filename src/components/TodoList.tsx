import React, { useState } from "react";
import TodoItem from "./TodoItem";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ITEMS_PER_PAGE = 5;

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

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

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const todosToDisplay = todos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <Container
        className="mt-20 bg"
        maxWidth="lg"
        sx={{
          padding: 2,
        }}
      >
        <Box
          sx={{
            padding: 2,
            backgroundColor: "#ffffff",
            borderRadius: 2,
            boxShadow: 2,
            marginBottom: 2,
          }}
        >
          <Typography variant="h5" component="h2" gutterBottom></Typography>
          <Box display="flex" alignItems="center">
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
              color="primary"
              onClick={addTodo}
              sx={{ marginLeft: 1, height: "51px" }}
            >
              Add
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            position: "relative",
            padding: 2,
            backgroundColor: "#ffffff",
            borderRadius: 2,
            boxShadow: 2,
            height: 550,
            overflowY: "auto",
          }}
        >
          <Typography variant="h5" component="h2" gutterBottom></Typography>
          <Box>
            {todosToDisplay.map((todo, index) => (
              <TodoItem
                key={index}
                index={index}
                todo={todo}
                removeTodo={removeTodo}
                editTodo={editTodo}
              />
            ))}
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            position="absolute"
            bottom={8}
            left={8}
            right={8}
          >
            <IconButton
              color="primary"
              disabled={currentPage === 1}
              onClick={handlePreviousPage}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              color="primary"
              disabled={currentPage * ITEMS_PER_PAGE >= todos.length}
              onClick={handleNextPage}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default TodoList;
