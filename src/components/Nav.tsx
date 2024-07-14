import React, { useState } from "react";
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
        <ListItem button component={Link} to="/home">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="/services">
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button component={Link} to="/pricing">
          <ListItemText primary="Pricing" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemText primary="Contact" />
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
            src="https://static-00.iconduck.com/assets.00/slow-motion-video-icon-512x511-arswqh3e.png"
            alt="Flowbite Logo"
            style={{ height: 32, marginRight: 8 }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            MyLogo
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
            <Button component={Link} to="/home" sx={getButtonStyle("/home")}>
              Home
            </Button>
            <Button component={Link} to="/about" sx={getButtonStyle("/about")}>
              About
            </Button>
            <Button
              component={Link}
              to="/services"
              sx={getButtonStyle("/services")}
            >
              Services
            </Button>
            <Button
              component={Link}
              to="/pricing"
              sx={getButtonStyle("/pricing")}
            >
              Pricing
            </Button>
            <Button
              component={Link}
              to="/contact"
              sx={getButtonStyle("/contact")}
            >
              Contact
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
