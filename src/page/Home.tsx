import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Footer from "../components/footerld";

function Home() {
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <Typography variant="h2" gutterBottom>
          Designer , Frontend Developer Internship
        </Typography>
        <Typography variant="h6" color="textSecondary" align="center">
          I am an intern specializing in Frontend Development.
        </Typography>
        <br />
        <Avatar
          alt="Remy Sharp"
          src="https://i.pinimg.com/736x/32/cb/e6/32cbe686d3783f5acb6515c25ef06a94.jpg"
          sx={{ width: 200, height: 200 }}
        />
      </Box>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4} mt={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea component={Link} to="/antd">
              <CardMedia
                component="img"
                alt="Antd"
                height="140"
                image="/src/image/sign.png"
                title="Antd"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea component={Link} to="/card">
              <CardMedia
                component="img"
                alt="Card"
                height="140"
                image="/src/image/card.png"
                title="Card"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea component={Link} to="/landingpage">
              <CardMedia
                component="img"
                alt="Landing Page"
                height="140"
                image="/src/image/land.png"
                title="Landing Page"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea component={Link} to="/word">
              <CardMedia
                component="img"
                alt="Word"
                height="140"
                image="/src/image/word.png"
                title="Word"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea component={Link} to="/todo">
              <CardMedia
                component="img"
                alt="Todo"
                height="140"
                image="/src/image/todos.png"
                title="Todo"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea component={Link} to="/shopping_cart">
              <CardMedia
                component="img"
                alt="Shopping Cart"
                height="140"
                image="/src/image/cart.png"
                title="Shopping Cart"
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
}

export default Home;
