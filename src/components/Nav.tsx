import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Nav = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const getButtonStyle = (path: string) => {
    return location.pathname === path
      ? { color: "white", backgroundColor: "black", borderColor: "black" }
      : { color: "black", borderColor: "transparent" };
  };

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <IconButton sx={{ ml: "auto" }}>
        <CloseIcon />
      </IconButton>
      <List>
        <ListItem button component={Link} to="/landingpage">
          <ListItemText primary="Landing Page" />
        </ListItem>
        <ListItem button component={Link} to="/count">
          <ListItemText primary="Count" />
        </ListItem>
        <ListItem button component={Link} to="/pokemon">
          <ListItemText primary="Pokemon" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "black",
          }}
        >
          <img
            src="\src\assets\icon\blackicon.png"
            alt="Flowbite Logo"
            style={{ height: 32, marginRight: 8 }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            UikazE
          </Typography>
        </Box>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ color: "black" }} // Set the color to black
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <Button
              component={Link}
              to="/landingpage"
              sx={getButtonStyle("/landingpage")}
            >
              Home
            </Button>
            <Button component={Link} to="/count" sx={getButtonStyle("/count")}>
              Projects
            </Button>
            <Button
              component={Link}
              to="/pokemon"
              sx={getButtonStyle("/pokemon")}
            >
              Blog
            </Button>
            <Button
              component={Link}
              to="/pokemon"
              sx={getButtonStyle("/pokemon")}
            >
              Contact us
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
