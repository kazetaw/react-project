// import React from "react";
import { RiSwordLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { GiArmorDowngrade } from "react-icons/gi";
import { TbShoe } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
import { AiOutlineFire } from "react-icons/ai";
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
      <div className="flex-initial w-40 max-w-xs rounded overflow-hidden shadow-lg">
        <img
          style={{ width: 80, margin: "auto" }}
          className=""
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
          alt="Pokemon"
        />
        <div className="px-6 py-4 text-center justify-center items-center">
          <div className="font-bold text-sm mb-2">BULBASAUR</div>
          <div className="flex justify-center items-center">
            <p className="text-gray-700 text-base">
              <div className="grid grid-cols-7 gap-6 justify-center">
                <div className="grid grid-rows-2">
                  <div>
                    <FaRegHeart />
                  </div>
                  <div className="text-sm">56</div>
                </div>
                <div className="grid grid-rows-2">
                  <div>
                    <RiSwordLine />
                  </div>
                  <div className="text-sm">56</div>
                </div>
                <div className="grid grid-rows-2">
                  <div>
                    <GiArmorDowngrade />
                  </div>
                  <div className="text-sm">56</div>
                </div>
                <div className="grid grid-rows-2">
                  <div>
                    <TbShoe />
                  </div>
                  <div className="text-sm">56</div>
                </div>
                <div className="grid grid-rows-2">
                  <div>
                    <FaRegStar />
                  </div>
                  <div className="text-sm">56</div>
                </div>
                <div className="grid grid-rows-2">
                  <div>
                    <AiOutlineFire />
                  </div>
                  <div className="text-sm">56</div>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pokemon;
