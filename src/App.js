import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/SignUpPage";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import AppDetail from "./pages/AppDetail";
import AddApps from "./pages/AddApps";
import { createContext, useState } from "react";
export const DetailContext = createContext();

function App() {
  const [detailData, setDetailData] = useState([]);

  return (
    <DetailContext.Provider value={{ detailData, setDetailData }}>
      <Routes>
        <Route index element={<ListPage />} />
        <Route path="/:list" element={<DetailPage />} />
        <Route path="/sign-in/*" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/Add" element={<AddApps />} />
        <Route path="/appdetail" element={<AppDetail />} />
      </Routes>
    </DetailContext.Provider>
  );
}

export default App;
