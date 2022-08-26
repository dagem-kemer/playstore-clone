import { useEffect, useState, useRef, useContext } from "react";
import classNames from "classnames";
import AlertIcon from "../icons/AlertIcon";
import { ValidationContext } from "../../store/ValidationContext";

const SignUpInput = ({
  label,
  className,
  validator,
  large,
  isPassword,
  setValue,
}) => {
  const inputRef = useRef();
  const validationCtx = useContext(ValidationContext);

  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsFocused(inputRef.current === document.activeElement);
  }, []);

  useEffect(() => {
    if (validationCtx.validate !== null) {
      const errorMsg = validator(inputRef.current.value);
      setError(errorMsg);

      validationCtx.addFields(label, inputRef.current.value);
      validationCtx.validateFileds(label, !errorMsg);
    }
  }, [validationCtx.validate]);

  let labelStyle = classNames({
    "py-3 px-4": large,
    "p-2": !large,
    "absolute left-0 top-2 transition duration-200": true,
    "py-0 -translate-y-1/2 bg-white scale-90": isFocused || error != null,
    "text-skyBlue": isFocused && error == null,
    "text-alertRed": error != null,
    "text-darkGrey": !isFocused && error == null,
  });

  let inputStyle = classNames({
    "py-3 px-4": large,
    "p-2": !large,
    "w-full  border rounded": true,
    "border-whiteGrey": !isFocused && error == null,
    "border-alertRed outline-alertRed": error != null,
    "outline-skyBlue border-2": isFocused,
  });

  const focustInput = () => {
    setIsFocused(true);
    inputRef.current?.focus();
  };

  return (
    <div className={"relative pt-2 " + className}>
      <input
        className={inputStyle}
        type={isPassword ? "password" : "text"}
        ref={inputRef}
        onChange={(e) => {
          if (setValue) setValue(e.target.value);
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {!inputRef.current?.value && (
        <label className={labelStyle} onClick={focustInput}>
          {label}
        </label>
      )}

      {error && (
        <p className="text-alertRed text-xs mt-1">
          <AlertIcon />
          <span className="ml-2">{error}</span>
        </p>
      )}
    </div>
  );
};

export default SignUpInput;
