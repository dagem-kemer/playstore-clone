import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../components/ui/Input";
import { Loginslice } from "../store/store";
import { useDispatch } from "react-redux/es/exports";

const EmailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const emailHandler = (email) => {
    setEmail(email);
  };
  const passwordHandler = (pass) => {
    setPassword(pass);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCK-f7QByEKK1iV49IKl7o-EnP8ZzYi9DE",
      {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    ).then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => {
          dispatch(Loginslice.login(data.idToken));
          localStorage.setItem("idToken", data.idToken);
          // navigate("/List-page");
          navigate("/");
        });
      } else {
        resp.json().then((data) => alert(data.error.message));
      }
    });
  };
  return (
    <>
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-2xl mt-4">Sign In</h1>
        <p className="mt-2 text-mediumGrey">Use your Google Account</p>
      </div>

      <form className="pt-6" onSubmit={SubmitHandler} >
        <Input
         
          label="Email or phone"
         
          large={true}
          className="mb-4"
          inputValue={emailHandler}
        />
        <Input label="Password" large={true} inputValue={passwordHandler}
          className="mb-4"
        />
        <p className="text-skyBlue mt-2 text-sm font-bold ">Forgot Password?</p>
        <p className="text-sm mt-8 text-darkGrey">
          Not your computer? Use Guest mode to sign in privately.
          <span className="text-sm font-bold text-skyBlue whitespace-nowrap">
            {" "}
            Learn more
          </span>
        </p>

        <div className="flex justify-between pt-12 pb-4">
          <Link
            to="/sign-up"
            className="text-skyBlue hover:bg-skyBlue rounded hover:bg-opacity-5 py-2 px-3"
          >
            Create account
          </Link>
          <button className="bg-skyBlue text-white px-6 py-2 rounded">
            Sign In
          </button>
        </div>
      </form>
    </>
  );
};

export default EmailPage;
