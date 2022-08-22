import { Outlet } from "react-router-dom";
import Logo from "../components/icons/Logo";
import Input from "../components/ui/Input";

const LoginPage = () => {
  return (
    <div className="flex min-w-full min-h-screen justify-center items-center">
      <div className="sm:border font-googleFont border-whiteGrey sm:w-[496px] p-6 sm:p-12 rounded-xl mx-auto sm:my-12">
        {/* Title */}
        <div className="flex flex-col justify-center text-center">
          <span className="block mx-auto w-auto">
            <Logo />
          </span>
        </div>

        <Outlet/>
      </div>
    </div>
  );
};

export default LoginPage;
