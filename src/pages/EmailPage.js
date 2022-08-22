import Input from "../components/ui/Input";

const EmailPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-2xl mt-4">Sign In</h1>
        <p className="mt-2 text-mediumGrey">Use your Google Account</p>
      </div>

      <form className="pt-6">
        <Input label="Email or phone" large={true} />
        <p className="text-skyBlue mt-2 text-sm font-bold ">Forgot Password?</p>
        <p className="text-sm mt-8 text-darkGrey">
          Not your computer? Use Guest mode to sign in privately.
          <span className="text-sm font-bold text-skyBlue whitespace-nowrap">
            {" "}
            Learn more
          </span>
        </p>

        <div className="flex justify-between pt-12 pb-4">
          <button className="text-skyBlue hover:bg-skyBlue rounded hover:bg-opacity-5 py-2 px-3">
            Create account
          </button>
          <button className="bg-skyBlue text-white px-6 py-2 rounded">
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default EmailPage;
