import { useEffect, useRef } from "react";
import SearchIcon from "../icons/SearchIcon";

const NavSearch = ({ dismiss }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="border border-gray-100 shadow-md w-full flex self-center rounded-md max-w-[720px] relative mx-auto">
      <button className="p-4">
        <SearchIcon className="w-4 h-4 stroke-darkGrey" />
      </button>
      <input
        type="text"
        ref={inputRef}
        className="grow outline-0"
        placeholder="Search for apps & games"
        onBlur={dismiss}
      />
    </div>
  );
};

export default NavSearch;
