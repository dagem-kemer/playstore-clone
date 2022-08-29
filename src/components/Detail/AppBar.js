import { useEffect, useState } from "react";
import CircleUserIcon from "../icons/CircleUserIcon";
import PlayStoreIcon from "../icons/PlayStoreIcon";
import SearchIcon from "../icons/SearchIcon";
import NavMenu from "./NavMenu";
import NavButton from "./NavButton";
import NavSearch from "./NavSearch";
import classNames from "classnames";

const AppBar = (props) => {
  const [isSearchShown, setIsSearchShown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 10 ? true : false);
    });
  }, []);

  const navStyle = classNames({
    "flex justify-between px-7 h-[64px] fixed top-0 bg-white w-full animated z-50": true,
    "shadow-xl": isScrolled,
  });

  return (
    <nav className={navStyle}>
      {/* icons and menu */}
      <div className="flex">
        <div className="self-center flex items-center mr-4">
          <PlayStoreIcon />
          <span className="text-2xl ml-4 text-darkGrey whitespace-nowrap">
            Google Play
          </span>
        </div>

        {!isSearchShown && (
          <ul className="flex">
            <NavMenu label="Game" isActive />
            <NavMenu label="Apps" />
            <NavMenu label="Movies & TV" />
            <NavMenu label="Books" />
            <NavMenu label="Kids" />
          </ul>
        )}
      </div>

      {isSearchShown && (
        <NavSearch
          searchValue={props.searchValue}
          dismiss={() => setIsSearchShown(false)}
        />
      )}

      {/* signin and signup buttons */}
      <div className="flex items-center">
        {!isSearchShown && (
          <NavButton onClick={() => setIsSearchShown(true)}>
            <SearchIcon />
          </NavButton>
        )}

        <NavButton>
          <CircleUserIcon />
        </NavButton>
      </div>
    </nav>
  );
};

export default AppBar;
