import { createSlice, configureStore } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    idToken: "",
    isLoggedIn: false,
  },
  reducers: {
    login(state, action) {
      return { ...state, idToken: action.payload, isLoggedIn: true };
    },
    logout(state) {
      return { ...state, idToken: "", isLoggedIn: false };
    },
  },
});

export const Loginslice = loginSlice.actions;

const store = configureStore({
  reducer: {
    loginSlice: loginSlice.reducer,
  },
});
export default store;
