import { createSlice, configureStore } from "@reduxjs/toolkit";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../components/FireBase/firebase-config";
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
// const AppDetailSlice = createSlice({
//   name: "Application-Detail",
//   initialState: {
//     appDetails: [],
//   },
//   reducers: {
//     saveAppDetails(state, action) {
//       return { ...state, appDetails: [...action.payload] };
//     },
//   },
// });
// export const AppDetail = AppDetailSlice.actions;
export const Loginslice = loginSlice.actions;

// export const Appdetailss = () => {
//   return async (dispatch) => {
//     const AppDetailCollection = collection(db, "Apps");

//     const getAppDetail = async () => {
//       const data = await getDocs(AppDetailCollection);
//       return data;
//     };
//     const data = await getAppDetail();
//     dispatch(
//       AppDetail.saveAppDetails(
//         data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
//       )
//     );
//   };
// };

const store = configureStore({
  reducer: {
    loginSlice: loginSlice.reducer,
    // AppDetailSlice: AppDetailSlice.reducer,
  },
});
export default store;
