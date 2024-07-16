import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Pokemon = {
  name: string;
  url: string;
};

type PokemonResponse = {
  results: Pokemon[];
};

type PokemonDetails = {
  id: number;
  name: string;
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
};

type PokemonQuery = {
  offset: number;
  limit: number;
};

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemon: builder.query<PokemonResponse, void>({
      query: () => `pokemon?limit=20`,
    }),
    getPokemonById: builder.query<PokemonResponse, PokemonQuery>({
      query: (params) => {
        const query = new URLSearchParams({
          offset: params.offset.toString(),
          limit: params.limit.toString(),
        });
        return `pokemon?${query.toString()}`;
      },
      transformResponse: (response: PokemonResponse) => {
        console.log("🚀 ~ response:", response);
        return response;
      },
    }),
    getPokemonDetails: builder.query<PokemonDetails, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const {
  useGetPokemonQuery,
  useGetPokemonByIdQuery,
  useGetPokemonDetailsQuery,
} = pokemonApi;
