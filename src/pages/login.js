import Logo from "../components/icons/Logo";
import EmailPage from "./EmailPage";
const LoginPage = () => {
  return (
    <div className="flex min-w-full min-h-screen justify-center items-center">
      <div className="sm:border font-googleFont border-whiteGrey sm:w-[496px] p-6 sm:p-12 rounded-xl mx-auto sm:my-12">
        <div className="flex flex-col justify-center text-center">
          <span className="block mx-auto w-auto">
            <Logo />
          </span>
        </div>
        <EmailPage />

        {/* <Outlet /> */}
      </div>
    </div>
  );
};

export default LoginPage;
