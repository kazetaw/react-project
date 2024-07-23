// import React from "react";
// import { Link } from "react-router-dom";

// import { motion } from "framer-motion";
import Footer from "../components/home/ui-components/Footer";
import { Contact } from "../components/Contact";
import Navbar from "../components/home/Navbar";
import Banner from "../components/home/Banner";
import Project from "../components/home/Project";
import Skill from "../components/home/Skill";
import Miniproject from "../components/home/ui-components/Miniproject";
import About from "../components/home/About";

// const item = [
//   {
//     src: "https://images.unsplash.com/photo-1516139008210-96e45dccd83b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/500x500",
//     alt: "cut citrus item",
//     text: "Lorem Ipsum",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/500x500",
//     alt: "sliced mango",
//     text: "Dolor Sit",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1536590158209-e9d615d525e4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/500x500",
//     alt: "a bunch of blueberries",
//     text: "Amet Consectetur",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1618424160135-fe3b7680af1e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/500x500",
//     alt: "a pineapple sitting on a table",
//     text: "Adipiscing Elit",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/500x500",
//     alt: "frozen raspberries",
//     text: "Nunc Tortor",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/500x500",
//     alt: "a sliced strawberry",
//     text: "Metus Mollis",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1615111784767-4d7c527f32a1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/500x500",
//     alt: "an arrangement of assorted sliced item",
//     text: "Congue Sagittis",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/500x500",
//     alt: "sliced watermelons",
//     text: "Vestibulum Et",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=80&w=792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/500x500",
//     alt: "grapeitem, lemons, and pomegranates",
//     text: "Donec Eget",
//   },
//   {
//     src: "https://plus.unsplash.com/premium_photo-1707353402003-effbc48c547d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/500x500",
//     alt: "half of an avocado",
//     text: "Maecenas et Justo",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1561389881-a5d8d5549588?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/500x500",
//     alt: "half of a lime",
//     text: "Malesuada Quam",
//   },
// ];
function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Project />
      {/* Skil section */}
      <Miniproject />
      <Skill />
      {/* RECENT section */}

      <Contact />
      {/* <div className="flex flex-col items-center min-h-screen bg-gray-100 font-inter text-gray-400">
        <ul className="w-full overflow-x-auto whitespace-nowrap text-center scroll-smooth">
          {item.map((fruit, index) => (
            <li
              key={index}
              className="inline-block text-center bg-gray-100 p-6 shadow-xl w-[min(50vw,350px)] sticky left-0 ml-[-4px]"
            >
              <img
                src={fruit.src}
                alt={fruit.alt}
                className="block w-[180px] h-[180px] object-cover mb-6 mx-auto"
              />
              <span className="text-lg font-medium">{fruit.text}</span>
            </li>
          ))}
        </ul>
      </div> */}
      <Footer />
    </>
  );
}

export default Home;
