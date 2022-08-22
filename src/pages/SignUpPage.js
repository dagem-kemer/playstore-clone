import Logo from "../components/icons/Logo";
import Input from "../components/ui/Input";

const SignUpPage = () => {
  return (
    <div className="sm:border font-googleFont relative overflow-hidden border-whiteGrey w-fit flex-start p-6 sm:p-12 sm:rounded-xl mx-auto sm:my-12 lg:flex gap-5">
      <div className="bg-whiteGrey w-full absolute left-0 top-0">
        <div className="w-full animate-marquee">
          <div className="w-3/5 h-1 rounded-full   bg-skyBlue"></div>
        </div>
      </div>

      <div>
        <span className="block mx-auto w-auto">
          <Logo />
        </span>
        <h1 className="text-2xl mt-4">Create your Google Account</h1>

        <form className="mt-8 text-sm">
          <div className="flex flex-col sm:flex-row gap-5">
            <Input label="First name" />
            <Input label="Last name" />
          </div>
          <div>
            {/* <input
              className="border-whiteGrey border p-2 grow rounded w-full "
              placeholder="User name"
            /> */}
            <Input label="Username" className="mt-5" />
            <p className="ml-3 mt-1 text-darkGrey">
              You will need to confirm this email belongs to you.
            </p>
          </div>

          <div>
            <button className="text-skyBlue font-bold mt-4 hover:bg-skyBlue rounded hover:bg-opacity-5 py-2 px-3">
              Create a New Gmail address instead
            </button>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-5">
            <Input label="Password" defaultError="Enter a password" />
            <Input label="Confirm" />
          </div>

          <p className="ml-3 mt-1 text-darkGrey">
            Use 8 or more characters with a mix of letters, numbers & symbols
          </p>
          <div className="flex flex-row items-center mt-4">
            <input type="checkbox" />
            <label className="text-mediumGrey text-base ml-6">
              Show password
            </label>
          </div>
          <div className="flex justify-between pt-12">
            <button className="text-skyBlue font-bold hover:bg-skyBlue hover:bg-opacity-5 py-2 px-3 rounded">
              Sign In Instead
            </button>
            <button className="bg-skyBlue text-white px-5 py-2 rounded hover:bg-darkBlue hover:shadow">
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className="hidden lg:block">
        <figure className="w-[224px] mt-20">
          <img
            className="max-w-full"
            src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
            alt=""
          />
          <figcaption className="font-light text-center text-mediumGrey">
            One account. All of Google working for you.
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default SignUpPage;
