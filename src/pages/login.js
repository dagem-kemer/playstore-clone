import Logo from "../components/icons/Logo";
import Input from "../components/ui/Input";

const LoginPage = () => {
  return (
    <div className="sm:border font-googleFont border-whiteGrey sm:w-[496px] p-6 sm:p-12 rounded-xl mx-auto sm:my-12">
      {/* Title */}
      <div className="flex flex-col justify-center text-center">
        <span className="block mx-auto w-auto">
          <Logo />
        </span>
        <h1 className="text-2xl mt-4">Sign In</h1>
        <p className="mt-2 text-mediumGrey">Use your Google Account</p>
      </div>

      <form className="pt-6">
        <Input label="Email or phone"/>
        <p className="text-skyBlue mt-2 text-sm font-bold ">Forgot Password?</p>
        <p className="text-sm mt-8 text-darkGrey">
          Not your computer? Use Guest mode to sign in privately.
          <span className="text-sm font-bold text-skyBlue whitespace-nowrap"> Learn more</span>
        </p>
        
        <div className="flex justify-between pt-12">
          <button className="text-skyBlue hover:bg-skyBlue rounded hover:bg-opacity-5 py-2 px-3">Create account</button>
          <button className="bg-skyBlue text-white px-6 py-2 rounded">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
