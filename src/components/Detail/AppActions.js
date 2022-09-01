import classNames from "classnames";
import AddWhishlistIcon from "../icons/AddWhishlist";
const AppActions = ({ isActive }) => {
  const installButtonStyle = classNames({
    "px-4 py-2.5 min-w-[200px] font-bold rounded-md": true,
    "bg-secondaryGrey text-lightGrey": !isActive,
    "bg-darkGreen text-white": isActive,
  });

  return (
    <div className="flex">
      <button className={installButtonStyle}>Install</button>
      <button className="mr-4 px-4 py-2.5 min-w-[200px] text-lightGrey rounded-md text-sm font-bold">
        <div className="flex items-center">
          <AddWhishlistIcon />
          <span className="ml-2">Add to whishlist</span>
        </div>
      </button>
    </div>
  );
};

export default AppActions;
