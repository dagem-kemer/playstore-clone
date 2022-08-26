import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ValidationContextProvider from "./store/ValidationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ValidationContextProvider>
      <App />
    </ValidationContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
