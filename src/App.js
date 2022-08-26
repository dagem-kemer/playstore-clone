import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/SignUpPage";
import ListPage from "./pages/ListPage";
import React from "react";
import DetailPage from "./pages/DetailPage";
function App() {
  return (
    <Routes>
      <Route index element={<ListPage />} />
      <Route path="*" element={<ListPage />} />
      <Route path="/sign-in/*" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/List-page/*">
        <Route index element={<ListPage />} />
        <Route path="sign-in" element={<LoginPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path=":list" element={<DetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
