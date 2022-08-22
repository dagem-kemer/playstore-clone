import { useEffect, useState, useRef } from "react";
import classNames from "classnames";
import AlertIcon from "../icons/AlertIcon";

// TODO: removeDefaultError
const Input = ({ label, className, defaultError, large }) => {
  const inputRef = useRef();

  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(defaultError);

  useEffect(() => {
    setIsFocused(inputRef.current === document.activeElement);
  }, []);

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
        ref={inputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label className={labelStyle} onClick={focustInput}>
        {label}
      </label>
      {error && (
        <p className="text-alertRed mt-1">
          <AlertIcon />
          <span className="ml-2">{defaultError}</span>
        </p>
      )}
    </div>
  );
};

export default Input;
