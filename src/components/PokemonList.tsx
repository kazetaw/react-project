import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  useGetPokemonQuery,
  useGetPokemonTypesQuery,
  useGetPokemonDetailsQuery,
} from "../store/slice/PokemonApi";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { RiSwordLine } from "react-icons/ri";
import { GiArmorDowngrade } from "react-icons/gi";
import { TbShoe } from "react-icons/tb";
import { AiOutlineFire } from "react-icons/ai";
import SkeletonCard from "./SkeletonCard";
import { getTypeColor } from "./utils";

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
      <div className="flex justify-center items-center mt-2">
        {data?.types.map((type) => (
          <div key={type.type.name} className="text-xs px-2 py-1 mx-1">
            <button
              type="button"
              className={`shadow-lg shadow-gray-900/50 dark:shadow-purple-800/80 text-white bg-gradient-to-r ${getTypeColor(
                type.type.name ?? "unknown"
              )} hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-sm w-16 h-6 flex items-center justify-center`}
            >
              {type.type.name}
            </button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-7 justify-center text-center mt-4">
        {data?.stats.map((stat, index) => (
          <div key={index} className="grid grid-rows-2 text-center">
            <div className="text-lg text-center">
              {getStatIcon(stat.stat.name)}
            </div>
            <div className="text-sm">{stat.base_stat}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PokemonList: React.FC = () => {
  const { data: pokemonData, error, isLoading } = useGetPokemonQuery();
  const { data: typesData } = useGetPokemonTypesQuery();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [pokemonDetails, setPokemonDetails] = useState<Record<string, any>>({});

  useEffect(() => {
    if (pokemonData) {
      const fetchDetails = async () => {
        const details: Record<string, any> = {};
        for (const pokemon of pokemonData.results) {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );
          const data = await response.json();
          details[pokemon.name] = data;
        }
        setPokemonDetails(details);
      };
      fetchDetails();
    }
  }, [pokemonData]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to fetch Pokémon</p>;

  const filteredPokemon = selectedType
    ? Object.values(pokemonDetails).filter((details) =>
        details.types.some((type: any) => type.type.name === selectedType)
      )
    : Object.values(pokemonDetails);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-10">
        <button
          onClick={() => setSelectedType(null)}
          className={`m-2 p-2 rounded ${
            selectedType === null ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
        {typesData?.results.map((type) => (
          <button
            key={type.name}
            onClick={() => setSelectedType(type.name)}
            className={`m-2 p-2 rounded ${
              selectedType === type.name
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {type.name}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {filteredPokemon.map((details: any) => (
          <div
            key={details.name}
            className="w-1/2 sm:w-1/4 md:w-1/6 p-2 flex justify-center"
          >
            <Link to={`/pokemon/${details.name}`}>
              <PokemonDetails name={details.name} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default PokemonList;
