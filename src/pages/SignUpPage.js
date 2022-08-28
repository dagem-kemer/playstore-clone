import Logo from "../components/icons/Logo";
import SignUpForm from "../components/auth/SignUpForm";
import ValidationContextProvider from "../store/ValidationContext";

const SignUpPage = () => {
  return (
    <div className="sm:border font-googleFont relative overflow-hidden border-whiteGrey w-fit flex-start p-6 sm:p-12 sm:rounded-xl mx-auto sm:my-12 lg:flex gap-5">
      <div>
        <span className="block mx-auto w-auto">
          <Logo />
        </span>
        <h1 className="text-2xl mt-4">Create your Google Account</h1>
        <ValidationContextProvider>
          <SignUpForm />
        </ValidationContextProvider>
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
