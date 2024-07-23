import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { GrFormPreviousLink } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import {
  useGetPokemonDetailsQuery,
  useGetPokemonQuery,
} from "../store/slice/PokemonApi";
import { getTypeColor } from "../components/utils"; // นำเข้าฟังก์ชัน getTypeColor
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import PokemonDetailSkeleton from "../components/PokemonDetailSkeleton";
import PokemonFailedSkeleton from "../components/PokemonFailedSkeleton";

const PokemonDetail = () => {
  const [activeTab, setActiveTab] = useState("INFO");
  const { name } = useParams<{ name: string }>();
  const { data, error, isLoading } = useGetPokemonDetailsQuery(name ?? "");
  const { data: allPokemonData } = useGetPokemonQuery();
  const navigate = useNavigate(); // ใช้ useNavigate แทน useHistory

  if (!name) {
    return <p>Invalid Pokemon name</p>;
  }

  useEffect(() => {
    if (data) {
      setActiveTab("INFO");
    }
  }, [data]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleNextClick = () => {
    if (data && allPokemonData) {
      const currentIndex = allPokemonData.results.findIndex(
        (pokemon) => pokemon.name === name
      );
      if (
        currentIndex !== -1 &&
        currentIndex < allPokemonData.results.length - 1
      ) {
        const nextPokemonName = allPokemonData.results[currentIndex + 1].name;
        navigate(`/pokemon/${nextPokemonName}`);
      }
    }
  };

  const handlePreviousClick = () => {
    if (data && allPokemonData) {
      const currentIndex = allPokemonData.results.findIndex(
        (pokemon) => pokemon.name === name
      );
      if (currentIndex !== -1 && currentIndex > 0) {
        const previousPokemonName =
          allPokemonData.results[currentIndex - 1].name;
        navigate(`/pokemon/${previousPokemonName}`);
      }
    }
  };

  if (isLoading) return <PokemonDetailSkeleton />;
  if (error) return <PokemonFailedSkeleton />;

  const backgroundColor = getTypeColor(data?.types[0]?.type?.name ?? "unknown");

  // ฟังก์ชันสำหรับการเติมศูนย์ด้านหน้า
  const formatNumber = (num: number) => num.toString().padStart(3, "0");

  return (
    <>
      <div className="container mx-auto">
        <div className={`${backgroundColor} py-5`}>
          <div className="flex justify-between">
            <div className="text-3xl font-bold text-white mt-1">
              <Link to="/pokemon">
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
        <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="justify-center items-center flex gap-2">
            {data?.types.map((typeInfo) => (
              <button
                key={typeInfo.type.name}
                type="button"
                className={`shadow-lg shadow-gray-900/50 dark:shadow-purple-800/80 text-white bg-gradient-to-r ${getTypeColor(
                  typeInfo.type.name ?? "unknown"
                )} hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-3xl text-sm px-10 py-3 text-center me-2 mb-2`}
              >
                {typeInfo.type.name}
              </button>
            ))}
          </div>
          <div className="flex justify-between">
            <button onClick={handlePreviousClick} className=" p-2 rounded">
              <GrFormPrevious size={24} />
            </button>
            <button onClick={handleNextClick} className=" p-2 rounded">
              <MdNavigateNext size={24} />
            </button>
          </div>
          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mt-4">
            <ul className="flex flex-wrap -mb-px">
              <li className="mr-2">
                <a
                  href="#"
                  onClick={() => handleTabClick("INFO")}
                  className={`inline-block p-4 border-b-2 ${
                    activeTab === "INFO"
                      ? "border-gray-900 text-gray-900"
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
                      ? "border-gray-900 text-gray-900"
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
              <div className="flex gap-4">
                <div className="font-bold text-gray-700">
                  <p>No.</p>
                  <p>Name</p>
                  <p>Type</p>
                  <p>Abilities</p>
                </div>
                <div className="text-left">
                  <p>{data ? formatNumber(data.id) : ""}</p>
                  <p>{data?.name.toUpperCase()}</p>
                  <p>{data?.types.map((type) => type.type.name).join(", ")}</p>
                  <p>
                    {data?.abilities
                      .map((ability) => ability.ability.name)
                      .join(", ")}
                  </p>
                </div>
              </div>
            )}
            {activeTab === "STATS" && (
              <div className="">
                <div>
                  {data?.stats.map((stat, index) => {
                    const statNames = [
                      "HP",
                      "Atk",
                      "Def",
                      "S.Atk",
                      "S.Def",
                      "Spd",
                    ];
                    return (
                      <div key={index} className="flex items-center mb-2 gap-5">
                        <span className="w-2 text-left ml-5 ">
                          {statNames[index]}
                        </span>
                        <span className="w-1 text-left ml-5 ">
                          {stat.base_stat}
                        </span>
                        <div className="w-1/2 bg-gray-200 rounded ml-5">
                          <div
                            className={`${backgroundColor} rounded h-2`}
                            style={{
                              width: `${(stat.base_stat / 100) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
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
      </div>
    </>
  );
};

export default PokemonDetail;
