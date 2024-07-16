import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slice/formSlice";
import exampleReducer from "./slice/ExampleRedux";
import { pokemonApi } from "./slice/PokemonApi";

export const store = configureStore({
  reducer: {
    [exampleReducer.name]: exampleReducer.reducer,
    [formReducer.name]: formReducer.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
