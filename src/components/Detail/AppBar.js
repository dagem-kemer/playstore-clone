import { useEffect, useState } from "react";
import classNames from "classnames";
import { useNavigate, Link } from "react-router-dom";

import CircleUserIcon from "../icons/CircleUserIcon";
import PlayStoreIcon from "../icons/PlayStoreIcon";
import SearchIcon from "../icons/SearchIcon";
import NavMenu from "./NavMenu";
import NavButton from "./NavButton";
import NavSearch from "./NavSearch";

const AppBar = (props) => {
  const [isSearchShown, setIsSearchShown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 10 ? true : false);
    });
  }, []);

  const navStyle = classNames({
    "flex justify-between px-7 h-[64px] fixed top-0 bg-white w-full animated z-50": true,
    "shadow-xl": isScrolled,
  });

  const logout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("idToken");
  };

  const login = () => {
    navigate("/sign-in");
  };

  const idToken = localStorage.getItem("idToken");
  const isLoggedIn = !!idToken;

  return (
    <nav className={navStyle}>
      {/* icons and menu */}
      <div className="flex">
        <div className="self-center  mr-4">
          <Link to="/" className="flex items-center">
            <PlayStoreIcon />
            <span className="text-2xl ml-4 text-darkGrey whitespace-nowrap">
              Google Play
            </span>
          </Link>
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

        <NavButton onClick={isLoggedIn ? logout : login}>
          <CircleUserIcon />
        </NavButton>
      </div>
    </nav>
  );
};

export default AppBar;
