// import React from "react";
// import { RiSwordLine } from "react-icons/ri";
// import { FaRegHeart } from "react-icons/fa";
// import { GiArmorDowngrade } from "react-icons/gi";
// import { TbShoe } from "react-icons/tb";
// import { FaRegStar } from "react-icons/fa";
// import { AiOutlineFire } from "react-icons/ai";
import PokemonList from "../components/PokemonList";

function Pokemon() {
  return (
    <>
      <nav
        className="justify-center text-center bg-black"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: 150, margin: "auto" }}
          src="https://static.vecteezy.com/system/resources/previews/027/127/571/original/pokemon-logo-pokemon-icon-transparent-free-png.png"
          alt=""
        />
      </nav>
      <div className="container mx-auto 2xl mt-14">
        <PokemonList />
      </div>
    </>
  );
}

export default Pokemon;
