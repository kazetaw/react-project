import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h2" gutterBottom>
          HOME
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/todo")}
        >
          Go to Todo List
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
