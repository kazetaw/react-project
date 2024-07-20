// import React from "react";
// import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import Footer from "../components/home/ui-components/Footer";
import { Contact } from "../components/Contact";
import Navbar from "../components/home/Navbar";
import Banner from "../components/home/Banner";
import Project from "../components/home/Project";
import Skill from "../components/home/Skill";
import Miniproject from "../components/home/ui-components/Miniproject";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Project />
      {/* Skil section */}
      <Miniproject />
      <Skill />
      {/* RECENT section */}

      <Contact />
      <Footer />
    </>
  );
}

export default Home;
