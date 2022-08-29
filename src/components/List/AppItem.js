import StarIcon from "../icons/StarIcon";

const AppItem = ({name, rating, image}) => {
  return (
    <div className="flex my-4">
      <div className="w-[64px] h-[64px] rounded-2xl  overflow-hidden shadow-md">
        <img src={image} className="h-full w-full object-cover " />
      </div>

      <div className="ml-4 text-darkGrey flex flex-col justify-evenly">
        <p className="text-base">{name}</p>
        <p className="text-xs">Strategy</p>
        <div className="flex items-baseline">
          <span className="text-sm mr-1">{rating}</span>
          <StarIcon />
        </div>
      </div>
    </div>
  );
};

export default AppItem;
