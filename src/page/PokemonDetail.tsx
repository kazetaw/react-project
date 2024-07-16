import React, { useState, useEffect } from "react";
import { GrFormPreviousLink } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useGetPokemonDetailsQuery } from "../store/slice/PokemonApi";

const PokemonDetail = () => {
  const { name } = useParams<{ name: string }>();
  const [activeTab, setActiveTab] = useState("INFO");
  const { data, error, isLoading } = useGetPokemonDetailsQuery(name);

  useEffect(() => {
    if (data) {
      // Optional: You can set initial activeTab based on default behavior
      setActiveTab("INFO");
    }
  }, [data]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  if (isLoading) return <p>Loading details...</p>;
  if (error) return <p>Failed to fetch details</p>;

  return (
    <>
      <div className="bg-green-300 w-full">
        <div className="flex justify-between">
          <div className="text-3xl font-bold text-white mt-1">
            <Link to="/home">
              <GrFormPreviousLink />
            </Link>
          </div>
          <div className="text-3xl font-bold text-white mr-2 mt-2">
            <a href="">
              <FaRegHeart />
            </a>
          </div>
        </div>
        <div className="container mx-auto mt-14">
          <div className="text-center">
            <span className="font-bold text-2xl text-white">
              {data?.name.toUpperCase()}
            </span>
            <img
              style={{ width: 250, margin: "auto" }}
              src={data?.sprites.other.home.front_default}
              alt={data?.name}
            />
          </div>
        </div>
      </div>

      <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2">
              <a
                href="#"
                onClick={() => handleTabClick("INFO")}
                className={`inline-block p-4 border-b-2 ${
                  activeTab === "INFO"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                } rounded-t-lg`}
              >
                INFO
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                onClick={() => handleTabClick("STATS")}
                className={`inline-block p-4 border-b-2 ${
                  activeTab === "STATS"
                    ? "border-gray-300 text-gray-500"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                } rounded-t-lg`}
              >
                STATS
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          {activeTab === "INFO" && (
            <div>
              <h2 className="text-xl font-bold">
                About {data?.name.toUpperCase()}
              </h2>
              <p>No. {data?.id}</p>
              <p>Name {data?.name.toUpperCase()}</p>
              <p>Type {data?.types.map((type) => type.type.name).join(", ")}</p>
              <p>
                Abilities{" "}
                {data?.abilities
                  .map((ability) => ability.ability.name)
                  .join(", ")}
              </p>
            </div>
          )}
          {activeTab === "STATS" && (
            <div>
              <h2 className="text-xl font-bold">STATS</h2>
              <div
                className="flex justify-center items-center rounded-full bg-orange-400"
                style={{ width: "100px", height: "100px" }}
              >
                <span className="text-white font-bold text-lg text-center">
                  Power <br />
                  355
                </span>
              </div>

              <p>
                HP:{" "}
                {data?.stats.find((stat) => stat.stat.name === "hp")?.base_stat}
                <br />
                Attack:{" "}
                {
                  data?.stats.find((stat) => stat.stat.name === "attack")
                    ?.base_stat
                }
                <br />
                Defense:{" "}
                {
                  data?.stats.find((stat) => stat.stat.name === "defense")
                    ?.base_stat
                }
                <br />
                Special Attack:{" "}
                {
                  data?.stats.find(
                    (stat) => stat.stat.name === "special-attack"
                  )?.base_stat
                }
                <br />
                Special Defense:{" "}
                {
                  data?.stats.find(
                    (stat) => stat.stat.name === "special-defense"
                  )?.base_stat
                }
                <br />
                Speed:{" "}
                {
                  data?.stats.find((stat) => stat.stat.name === "speed")
                    ?.base_stat
                }
              </p>
            </div>
          )}
          {activeTab === "settings" && (
            <div>
              <h2 className="text-xl font-bold">Settings</h2>
              <p>
                Here you can adjust the settings for your Pokémon detail view.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PokemonDetail;
