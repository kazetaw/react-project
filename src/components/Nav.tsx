import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

function Nav() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const getButtonStyle = (path: any) => {
    return location.pathname === path
      ? { color: "white", backgroundColor: "black", borderColor: "black" }
      : { color: "black", borderColor: "transparent" };
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        padding: isMobile ? "0.5rem" : "1rem",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            color: "black",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: 2,
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
          <Button
            component={Link}
            to="/landingpage"
            variant="outlined"
            sx={getButtonStyle("/landingpage")}
          >
            Landing Page
          </Button>
          <Button
            component={Link}
            to="/card"
            variant="outlined"
            sx={getButtonStyle("/card")}
          >
            Card
          </Button>
          <Button
            component={Link}
            to="/antd"
            variant="outlined"
            sx={getButtonStyle("/antd")}
          >
            Antd
          </Button>
          <Button
            component={Link}
            to="/shopping_cart"
            variant="outlined"
            sx={getButtonStyle("/shopping_cart")}
          >
            Card
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
