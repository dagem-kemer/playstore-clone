import { Routes, Route} from "react-router-dom";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/SignUpPage";
import EmailPage from "./pages/EmailPage";
import WelcomePage from "./pages/WelcomPage";

function App() {
  return (
    <Routes>
      {/* <Route path="/sign-in/*" element={<LoginPage />}>
        <Route path="*" element={<EmailPage />}/>
        <Route path="password" element={<WelcomePage/>}/>
      </Route> */}
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
