import { Link, useLocation } from "react-router-dom";
import { Box, Button } from "@mui/material";

function Nav() {
  const location = useLocation();

  const getButtonStyle = (path: any) => {
    return location.pathname === path
      ? { color: "white", backgroundColor: "black", borderColor: "black" }
      : { color: "black", borderColor: "black" };
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        padding: 2,
        backgroundColor: "background.paper",
      }}
    >
      <Button
        component={Link}
        to="/home"
        variant="outlined"
        sx={getButtonStyle("/home")}
      >
        Home
      </Button>
      <Button
        component={Link}
        to="/todo"
        variant="outlined"
        sx={getButtonStyle("/todo")}
      >
        Todo
      </Button>
      <Button
        component={Link}
        to="/word"
        variant="outlined"
        sx={getButtonStyle("/word")}
      >
        Word
      </Button>
    </Box>
  );
}

export default Nav;
