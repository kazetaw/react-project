import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slice/formSlice";
import exampleReducer from "./slice/ExampleRedux";

export const store = configureStore({
  reducer: {
    form: formReducer,
    counter: exampleReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
