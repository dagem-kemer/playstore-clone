import StarIcon from "../icons/StarIcon";
import EllipsisIcon from "../icons/EllipsisVertical";

const Review = ({ user, date, reveiwText }) => {
  return (
    <div className="py-6">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <img
            src="Images/avatar.jpg"
            className="max-w-[32px] h-[32px] object-cover rounded-full"
          />
          <div className="text-lightBlack">{user.name}</div>
        </div>

        <button>
          <EllipsisIcon />
        </button>
      </div>

      <div className="flex items-center mt-4">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <div className="ml-4 text-xs text-darkGrey">{date}</div>
      </div>

      <div className="mt-2 text-darkGrey text-sm">{reveiwText}</div>
    </div>
  );
};

export default Review;