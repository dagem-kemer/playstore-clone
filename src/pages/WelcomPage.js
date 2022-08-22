import UserIcon from "../components/icons/UserIcon";
import Input from "../components/ui/Input";

const WelcomePage = () => {
  return (
    <>
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-2xl mt-4">Welcome</h1>
        <p className="mt-2 text-mediumGrey border block mx-auto px-4 py-2 border-darkGrey rounded-full">
          <UserIcon />
          <span className="ml-2">dagem.seyfu@gmail.com</span>
        </p>
      </div>

      <form className="pt-6">
        <Input label="Password" large={true} />


        <div className="flex justify-between pt-12 pb-4">
          <button className="text-skyBlue hover:bg-skyBlue rounded hover:bg-opacity-5 py-2 px-3">
            Forgot password?
          </button>
          <button className="bg-skyBlue text-white px-6 py-2 rounded">
            Next
          </button>
        </div>
      </form>
    </>
  );
};
export default WelcomePage;
