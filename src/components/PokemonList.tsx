import React from "react";
import { Link } from "react-router-dom";
import {
  useGetPokemonQuery,
  useGetPokemonDetailsQuery,
} from "../store/slice/PokemonApi";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { RiSwordLine } from "react-icons/ri";
import { GiArmorDowngrade } from "react-icons/gi";
import { TbShoe } from "react-icons/tb";
import { AiOutlineFire } from "react-icons/ai";
import SkeletonCard from "./SkeletonCard";

const getStatIcon = (statName: string) => {
  switch (statName.toLowerCase()) {
    case "hp":
      return <FaRegHeart />;
    case "attack":
      return <RiSwordLine />;
    case "defense":
      return <GiArmorDowngrade />;
    case "special-attack":
      return <TbShoe />;
    case "special-defense":
      return <FaRegStar />;
    case "speed":
      return <AiOutlineFire />;
    default:
      return null;
  }
};

const PokemonDetails: React.FC<{ name: string }> = ({ name }) => {
  const { data, error, isLoading } = useGetPokemonDetailsQuery(name);

  if (isLoading) return <SkeletonCard />;
  if (error) return <p>Failed to fetch details</p>;

  return (
    <div className="px-6 py-4 text-center justify-center items-center border border-gray-200 shadow-md rounded-lg m-4">
      <img src={data?.sprites.other.home.front_default} alt={data?.name} />
      <div className="font-bold text-sm text-gray-700 mb-2">
        {data?.name.toUpperCase()}
      </div>
      {/* stats */}
      <div className="grid grid-cols-7 gap-7 justify-center text-center">
        {data?.stats.map((stat, index) => (
          <div key={index} className="grid grid-rows-2 text-center">
            <div className="text-lg text-center">
              {getStatIcon(stat.stat.name)}
            </div>
            <div className="text-sm">{stat.base_stat}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <div className="text-gray-700 text-base"></div>
      </div>
    </div>
  );
};

const PokemonList: React.FC = () => {
  const { data, error, isLoading } = useGetPokemonQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to fetch Pokémon</p>;

  return (
    <div className="flex flex-wrap justify-center gap-10">
      {data?.results.map((pokemon) => (
        <div
          key={pokemon.name}
          className="w-1/2 sm:w-1/4 md:w-1/6 p-2 flex justify-center"
        >
          <Link to={`/pokemon/${pokemon.name}`}>
            <PokemonDetails name={pokemon.name} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
