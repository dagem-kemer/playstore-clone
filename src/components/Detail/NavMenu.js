import classNames from "classnames";

const NavMenu = ({ label, isActive }) => {
  const labelStyle = classNames({
    "transition-colors ease-linear hover:text-black cursor-pointer whitespace-nowrap": true,
    "text-darkGreen": isActive,
    "text-darkGrey": !isActive,
  });

  return (
    <li className="px-4 ">
      <a className="flex items-center relative w-full h-full">
        <span className={labelStyle}>{label}</span>
        {isActive && (
          <span className="bg-darkGreen absolute w-full bottom-0 left-0 h-1 rounded-full"></span>
        )}
      </a>
    </li>
  );
};

export default NavMenu;
