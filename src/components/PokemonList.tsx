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

  if (isLoading)
    return (
      <div role="status">
        <svg
          aria-hidden="true"
          className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  if (error) return <p>Failed to fetch details</p>;

  return (
    <div className="flex justify-center">
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
    </div>
  );
};

const PokemonList: React.FC = () => {
  const { data, error, isLoading } = useGetPokemonQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to fetch Pokémon</p>;

  return (
    <>
      <ul className="grid grid-cols-1 justify-between gap-5 sm:grid-cols-3 md:grid-cols-5 ">
        {data?.results.map((pokemon) => (
          <li key={pokemon.name} className="w-1/5 p-4">
            <Link to={`/pokemon/${pokemon.name}`}>
              <PokemonDetails name={pokemon.name} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PokemonList;
