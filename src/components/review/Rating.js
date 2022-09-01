import StarIcon from "../icons/StarIcon";
import RatingBar from "./RatingBar";

const Rating = () => {
  return (
    <div className="pt-6">
      <div className="flex gap-6">
        <div>
          <div className="text-[3.5rem] leading-[4rem]">4.3</div>
          <div className="flex">
            <span>
              <StarIcon className="w-4 h-4" />
            </span>
            <span>
              <StarIcon className="w-4 h-4" />
            </span>
            <span>
              <StarIcon className="w-4 h-4" />
            </span>
            <span>
              <StarIcon className="w-4 h-4" />
            </span>
            <span>
              <StarIcon className="w-4 h-4" />
            </span>
          </div>
          <div className="text-xs text-mediumGrey mt-2">3.25M reviews</div>
        </div>

        <div className="grow">
          {[1, 2, 3, 4, 5].map((value) => (
            <RatingBar value={value} amount={value * 10} key={value}/>
          ))}
          {/* <RatingBar /> */}
        </div>
      </div>
    </div>
  );
};

export default Rating;
