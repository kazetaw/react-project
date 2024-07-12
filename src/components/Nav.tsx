import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

function Nav() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            component="div"
            onClick={handleClick}
            variant="outlined"
            sx={{ color: "black", borderColor: "transparent" }}
          >
            Project
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{ onMouseLeave: handleClose }}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: "white",
                color: "black",
                minWidth: "100px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
              },
              "& .MuiMenuItem-root": {
                justifyContent: "center",
              },
            }}
          >
            <MenuItem
              component={Link}
              to="/antd"
              onClick={handleClose}
              sx={getButtonStyle("/antd")}
            >
              Antd
            </MenuItem>
            <MenuItem
              component={Link}
              to="/card"
              onClick={handleClose}
              sx={getButtonStyle("/card")}
            >
              Card
            </MenuItem>
            <MenuItem
              component={Link}
              to="/word"
              onClick={handleClose}
              sx={getButtonStyle("/word")}
            >
              Word
            </MenuItem>
            <MenuItem
              component={Link}
              to="/todo"
              onClick={handleClose}
              sx={getButtonStyle("/todo")}
            >
              Todo
            </MenuItem>
          </Menu>
          <Button
            component={Link}
            to="/contact"
            variant="outlined"
            sx={getButtonStyle("/contact")}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
