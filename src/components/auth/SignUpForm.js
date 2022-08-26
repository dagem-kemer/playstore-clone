import { useContext, useEffect, useState } from "react";
import { ValidationContext } from "../../store/ValidationContext";
import { useNavigate } from "react-router-dom";
import TextButton from "../ui/TextButton";
import ActionButton from "../ui/ActionButton";
import SignUpInput from "../ui/SignUpInput";
import ProgressIndicator from "../ui/ProgressIndicator";
import { createPortal } from "react-dom";
import ErrorPopup from "../ui/ErrorPopup";

const API_KEY = "AIzaSyCK-f7QByEKK1iV49IKl7o-EnP8ZzYi9DE";
const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
const DB_URL = `https://playstore-clone-c5796-default-rtdb.firebaseio.com/users.json`;

const defaultValidator = (field) => {
  return (value) => {
    if (value.trim().length === 0) {
      return `Please provide a ${field}`;
    }
  };
};

const SignUpForm = () => {
  const validationCtx = useContext(ValidationContext);
  const navigate = useNavigate();

  const [isTouched, setIsTouched] = useState(false);

  const [showPassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState("");

  const [isRequesting, setIsRequesting] = useState(false);
  const [formError, setFormError] = useState(null);

  const confirmValidator = (value) => {
    if (value.trim().length === 0) {
      return `Please confirm your password.`;
    }

    if (value !== password) {
      return "The passwords do not match.";
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    validationCtx.onValidate();
  };

  useEffect(() => {
    if (isTouched && !validationCtx.invalidFields.size) {
      (async function () {
        setIsRequesting(true);
        const email = validationCtx.fields["Email address"];
        const password = validationCtx.fields["Password"];

        try {
          const authResponse = await fetch(URL, {
            method: "POST",
            body: JSON.stringify({ email, password, returnSecureToken: true }),
          });
          
          const data = await authResponse.json();
          console.log(data)
          if (!authResponse.ok) {
            setFormError({
              title: 'Authentication Error',
              description: 'Unable to create user. ' + data.error.message
            })
            throw new Error("Error happend");
          }
          // TODO: do something with the data;
          

          const dbResponse = await fetch(DB_URL, {
            method: "POST",
            body: JSON.stringify({
              firstName: validationCtx.fields["first name"],
              lastaName: validationCtx.fields["last name"],
              email: validationCtx.fields["email"],
            }),
          });
          const dbData = await dbResponse.json();
          console.log(dbData)

          if (!dbResponse.ok) {
            setFormError({
              title: "Database Error",
              description: "Unable to save your data " + + data.error.message,
            });
            throw new Error("Unable to save user data");
          }

          navigate("/", { replace: true });
        } catch (error) {
          console.log("error happend");
        }

        setIsRequesting(false);
      })();
    }
    setIsTouched(true);
  }, [validationCtx.invalidFields]);

  return (
    <>
      <form className="mt-8 text-sm" onSubmit={submitHandler}>
        {isRequesting && <ProgressIndicator />}

        <div className="flex flex-col sm:flex-row gap-5">
          <SignUpInput
            label="First name"
            validator={defaultValidator("first name")}
          />
          <SignUpInput label="Last name" validator={defaultValidator("last name")} />
        </div>

        <SignUpInput
          label="Email address"
          className="mt-5"
          validator={defaultValidator("email address")}
        />
        <p className="ml-3 mt-1 text-darkGrey">
          You will need to confirm this email belongs to you.
        </p>

        <div className="mt-4">
          <TextButton dest="#" label="Create a New Gmail address instead" />
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-5">
          <SignUpInput
            label="Password"
            validator={defaultValidator("password")}
            isPassword={showPassword}
            setValue={setPassword}
          />
          <SignUpInput
            label="Confirm"
            isPassword={true}
            validator={confirmValidator}
          />
        </div>

        <p className="ml-3 mt-1 text-darkGrey">
          Use 8 or more characters with a mix of letters, numbers & symbols
        </p>

        <div className="flex flex-row items-center mt-4">
          <input
            type="checkbox"
            id="showPassword"
            onChange={() => setShowPassword((prev) => !prev)}
          />
          <label
            className="text-mediumGrey text-base ml-6"
            htmlFor="showPassword"
          >
            Show password
          </label>
        </div>

        <div className="flex justify-between pt-12">
          <TextButton dest="#" label="Sign in instead" />
          <ActionButton label="Sign Up" />
        </div>
      </form>

      {formError &&
        createPortal(
          <ErrorPopup
            error={formError}
            handleClose={() => setFormError(null)}
          />,
          document.getElementById("overlay")
        )}
    </>
  );
};

export default SignUpForm;
