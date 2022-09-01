import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/SignUpPage";
import ListPage from "./pages/ListPage";
import AppDetail from "./pages/AppDetail";
import AddApps from "./pages/AddApps";
import { createContext, useState } from "react";
export const DetailContext = createContext();

function App() {
  console.log("x");
  return (
    <Routes>
      <Route index element={<ListPage />} />
      <Route path="/:list" element={<AppDetail />} />
      <Route path="/sign-in/*" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/Add" element={<AddApps />} />
    </Routes>
  );
}

export default App;
