// import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Footer from "../components/footerld";
import { motion } from "framer-motion";
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 2.5,
        delay: 1 + i * 0.8,
        bounce: 0,
      },
      opacity: { duration: 0.5, delay: 1 + i * 0.8 }, // Increase opacity transition duration and delay
    },
  }),
};
function Home() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          backgroundImage:
            "url('https://images.pexels.com/photos/18904094/pexels-photo-18904094/free-photo-of-landscape-of-rocky-hills.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {" "}
        <Box
          sx={{
            display: "flex",
            m: 1,
            p: 1,
            borderRadius: 2,
            fontSize: "0.875rem",
            fontWeight: "700",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: 200, // ปรับขนาดตามต้องการ
              height: 200, // ปรับขนาดตามต้องการ
              marginLeft: -32,
              marginTop: -5,
            }}
          >
            <Box
              component="img"
              src="/src/assets/icon/top.png"
              alt="Remy Sharp"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              component="img"
              src="/src/assets/icon/under.png"
              alt="Remy Sharp"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <motion.svg
            width="800"
            height="500"
            viewBox="20 -230 100 700"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M 111.314 97.434 A 63.512 63.512 0 0 0 112.6 84.4 L 112.6 42.2 L 112.6 0 L 95.2 0 L 77.6 0 L 77.6 41.4 L 77.6 82.8 A 32.681 32.681 0 0 1 76.903 89.729 A 22.567 22.567 0 0 1 71.7 100.2 A 19.128 19.128 0 0 1 63.955 105.537 A 21.779 21.779 0 0 1 56.4 106.8 A 26.006 26.006 0 0 1 55.382 106.78 A 19.699 19.699 0 0 1 41 100.2 A 22.278 22.278 0 0 1 35.844 90.309 A 31.648 31.648 0 0 1 35 82.8 L 35 41.4 L 35 0 L 17.6 0 L 0 0 L 0 42.4 L 0 84.8 Q 0 97.4 4.2 107.4 Q 8.4 117.4 15.9 124.5 A 50.088 50.088 0 0 0 16.431 124.995 A 51.761 51.761 0 0 0 33.6 135.4 A 57.862 57.862 0 0 0 41.874 137.789 A 68.337 68.337 0 0 0 56 139.2 A 72.944 72.944 0 0 0 60.406 139.068 Q 69.825 138.499 78.139 135.459 A 58.022 58.022 0 0 0 78.3 135.4 Q 88.6 131.6 96.3 124.4 Q 104 117.2 108.3 107.1 A 51.604 51.604 0 0 0 111.314 97.434 Z"
              stroke="#fff"
              variants={draw}
              custom={1}
            />
          </motion.svg>
          <motion.svg
            width="800"
            height="500"
            viewBox="-120 -230 120 700"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M 3.466 128.536 L 3.466 85.883 L 3.466 43.231 L 17.161 43.231 L 30.691 43.231 L 30.691 85.883 L 30.691 128.536 L 17.161 128.536 L 3.466 128.536 Z M 10.767 32.309 A 17.037 17.037 0 0 0 17.161 33.496 Q 21.781 33.496 25.658 31.186 Q 29.536 28.876 31.846 25.081 Q 34.156 21.286 34.156 16.666 A 18.314 18.314 0 0 0 34.154 16.378 A 15.391 15.391 0 0 0 31.846 8.333 Q 29.536 4.621 25.658 2.311 Q 21.781 0.001 17.161 0.001 A 19.628 19.628 0 0 0 16.826 0.003 A 16.53 16.53 0 0 0 8.498 2.311 Q 4.621 4.621 2.311 8.333 A 15.163 15.163 0 0 0 1.193 10.497 A 15.829 15.829 0 0 0 0.001 16.666 Q 0.001 21.286 2.311 25.081 Q 4.621 28.876 8.498 31.186 A 16.184 16.184 0 0 0 10.767 32.309 Z"
              stroke="#fff"
              variants={draw}
              custom={1}
            />
          </motion.svg>
          <motion.svg
            width="800"
            height="500"
            viewBox="-170 -230 120 700"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M 0 131.4 L 0 65.7 L 0 0 L 14.94 0 L 29.7 0 L 29.7 35.82 L 29.7 71.64 Q 36.18 63.36 42.66 54.99 Q 49.14 46.62 55.62 38.34 L 72.99 38.34 L 90.36 38.34 Q 81.9 48.96 73.17 59.76 Q 64.44 70.56 55.98 81.18 Q 64.98 93.6 74.07 106.29 Q 83.16 118.98 91.98 131.4 L 74.34 131.4 L 56.7 131.4 Q 50.04 121.86 43.2 112.05 Q 36.36 102.24 29.7 92.7 L 29.7 112.05 L 29.7 131.4 L 14.94 131.4 L 0 131.4 Z"
              stroke="#fff"
              variants={draw}
              custom={1}
            />
          </motion.svg>
          <motion.svg
            width="800"
            height="500"
            viewBox="-265 -260 110 700"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M 74.601 106.201 L 74.601 103.101 L 74.601 100.201 Q 69.601 104.401 63.301 106.701 A 38.563 38.563 0 0 1 51.365 108.973 A 44.183 44.183 0 0 1 49.801 109.001 Q 39.601 109.001 30.601 105.101 Q 21.601 101.201 14.701 93.901 Q 7.801 86.601 3.901 76.601 Q 0.001 66.601 0.001 54.401 A 67.929 67.929 0 0 1 1.167 41.556 A 54.652 54.652 0 0 1 3.901 32.001 A 52.469 52.469 0 0 1 10.868 19.372 A 47.282 47.282 0 0 1 14.701 14.901 Q 21.601 7.801 30.601 3.901 Q 39.601 0.001 49.601 0.001 A 40.197 40.197 0 0 1 61.994 1.89 A 37.986 37.986 0 0 1 63.201 2.301 A 39.858 39.858 0 0 1 73.329 7.627 A 37.302 37.302 0 0 1 74.601 8.601 L 74.601 5.601 L 74.601 2.801 L 91.201 2.801 L 107.601 2.801 L 107.601 54.501 L 107.601 106.201 L 91.201 106.201 L 74.601 106.201 Z M 54.201 79.801 Q 63.801 79.801 69.601 72.801 A 24.345 24.345 0 0 0 74.498 62.711 Q 75.401 58.898 75.401 54.401 Q 75.401 44.37 70.91 37.823 A 22.118 22.118 0 0 0 69.601 36.101 A 18.822 18.822 0 0 0 55.823 29.252 A 25.416 25.416 0 0 0 54.201 29.201 A 22.71 22.71 0 0 0 47.174 30.237 A 18.188 18.188 0 0 0 38.701 36.001 Q 33.495 42.211 33.044 52.425 A 44.751 44.751 0 0 0 33.001 54.401 A 38.286 38.286 0 0 0 33.721 62.054 Q 34.68 66.753 36.916 70.4 A 21.87 21.87 0 0 0 38.701 72.901 A 18.619 18.619 0 0 0 52.252 79.729 A 26.159 26.159 0 0 0 54.201 79.801 Z"
              stroke="#fff"
              variants={draw}
              custom={1}
            />
          </motion.svg>
          <motion.svg
            width="800"
            height="500"
            viewBox="-390 -260 110 700"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M 0 103.4 L 0 89.2 L 0 75 L 20.8 51.8 L 41.6 28.6 L 20.8 28.6 L 0 28.6 L 0 14.3 L 0 0 L 41 0 L 82 0 L 82 14.3 L 82 28.6 L 61.2 51.8 L 40.4 75 L 61.2 75 L 82 75 L 82 89.2 L 82 103.4 L 41 103.4 L 0 103.4 Z"
              stroke="#fff"
              variants={draw}
              custom={1}
            />
          </motion.svg>
          <motion.svg
            width="800"
            height="500"
            viewBox="-490 -260 110 700"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M 94.601 101.801 Q 80.801 107.601 67.201 109.001 A 84.907 84.907 0 0 1 58.504 109.456 A 72.714 72.714 0 0 1 41.501 107.501 A 59.07 59.07 0 0 1 23.004 99.688 A 55.842 55.842 0 0 1 20.001 97.601 Q 10.601 90.601 5.301 79.801 A 51.058 51.058 0 0 1 0.746 64.972 A 66.899 66.899 0 0 1 0.001 54.801 A 62.422 62.422 0 0 1 1.524 40.793 A 53.831 53.831 0 0 1 3.901 33.101 Q 7.801 23.201 15.001 15.701 Q 22.201 8.201 32.001 4.101 A 53.565 53.565 0 0 1 49.466 0.122 A 63.151 63.151 0 0 1 53.401 0.001 A 54.934 54.934 0 0 1 64.178 1.017 A 44.646 44.646 0 0 1 72.201 3.401 Q 80.601 6.801 86.801 12.901 A 47.48 47.48 0 0 1 96.5 26.748 A 53.857 53.857 0 0 1 96.801 27.401 A 56.968 56.968 0 0 1 101.127 42.107 A 66.181 66.181 0 0 1 101.601 45.801 Q 102.429 54.082 101.062 63.186 A 86.069 86.069 0 0 1 100.401 67.001 L 67.401 67.001 L 34.401 67.001 A 20.99 20.99 0 0 0 44.444 76.693 A 28.182 28.182 0 0 0 47.101 77.801 A 38.638 38.638 0 0 0 55.186 79.714 Q 60.468 80.404 66.639 79.944 A 73.098 73.098 0 0 0 68.301 79.801 A 92.591 92.591 0 0 0 82.262 77.292 A 123.408 123.408 0 0 0 94.601 73.401 L 94.601 87.601 L 94.601 101.801 Z M 52.601 29.601 Q 46.801 29.601 41.901 32.801 A 17.946 17.946 0 0 0 36.62 38.212 A 25.046 25.046 0 0 0 34.401 42.601 L 52.501 42.601 L 70.601 42.601 A 24.958 24.958 0 0 0 68.503 38.063 Q 66.457 34.65 63.501 32.701 A 18.823 18.823 0 0 0 54.525 29.678 A 23.468 23.468 0 0 0 52.601 29.601 Z"
              stroke="#fff"
              variants={draw}
              custom={1}
            />
          </motion.svg>
        </Box>
        <br />
      </Box>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          gutterBottom
          sx={{ marginTop: 10, color: "#686868" }}
        >
          RECENT WORK
        </Typography>
        <Grid container spacing={4} mt={1}>
          <Grid item xs={6}>
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
          <Grid item xs={6}>
            <Typography variant="h5">dasd</Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium ea numquam dolorem quisquam minus deleniti ullam?
              Repellendus natus aliquid hic accusantium adipisci sunt incidunt
              eius deleniti amet? Nihil, commodi quae?
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5">dasd</Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium ea numquam dolorem quisquam minus deleniti ullam?
              Repellendus natus aliquid hic accusantium adipisci sunt incidunt
              eius deleniti amet? Nihil, commodi quae?
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <Box component={Link} to="/card">
                <CardMedia
                  component="img"
                  alt="Card"
                  height="140"
                  image="/src/image/card.png"
                  title="Card"
                />
              </Box>
            </Card>
          </Grid>
          <Grid item xs={6}>
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
          </Grid>{" "}
          <Grid item xs={6}>
            <Typography variant="h5">dasd</Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium ea numquam dolorem quisquam minus deleniti ullam?
              Repellendus natus aliquid hic accusantium adipisci sunt incidunt
              eius deleniti amet? Nihil, commodi quae?
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5">dasd</Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium ea numquam dolorem quisquam minus deleniti ullam?
              Repellendus natus aliquid hic accusantium adipisci sunt incidunt
              eius deleniti amet? Nihil, commodi quae?
            </Typography>
          </Grid>
          <Grid item xs={6}>
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
          <Grid item xs={6}>
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
          <Grid item xs={6}>
            <Typography variant="h5">dasd</Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium ea numquam dolorem quisquam minus deleniti ullam?
              Repellendus natus aliquid hic accusantium adipisci sunt incidunt
              eius deleniti amet? Nihil, commodi quae?
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5">dasd</Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium ea numquam dolorem quisquam minus deleniti ullam?
              Repellendus natus aliquid hic accusantium adipisci sunt incidunt
              eius deleniti amet? Nihil, commodi quae?
            </Typography>
          </Grid>
          <Grid item xs={6}>
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
    </>
  );
}

export default Home;
