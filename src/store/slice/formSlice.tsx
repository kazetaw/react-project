import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
  username: string;
  password: string;
  email: string;
  phone: string;
  birthdate: string;
  gender: string;
  hobbies: string[];
  otherHobby: string;
  acceptTerms: boolean;
}

const initialState: FormState = {
  username: "",
  password: "",
  email: "",
  phone: "",
  birthdate: "",
  gender: "",
  hobbies: [],
  otherHobby: "",
  acceptTerms: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<Partial<FormState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateForm } = formSlice.actions;
export default formSlice.reducer;
