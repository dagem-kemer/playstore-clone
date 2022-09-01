import StarIcon from "../icons/StarIcon";
import classNames from "classnames";

const RatingStars = ({ value, large }) => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((point) => {
        let width;
        value -= 1;
        if (value >= 0) width = 100;
        else if (value > -1) width = (1+value) * 100;
        else width = 0;
        return <Star percent={width} key={point} large />;
      })}
    </>
  );
};

const Star = ({ percent, large }) => {
  const size = classNames({
    "w-3 h-3": !large,
    "w-4 h-4": large,
  });

  return (
    <div className="relative">
      <StarIcon className={"fill-lightGrey " + size} />
      <div
        className="h-full overflow-hidden absolute z-10 top-0"
        style={{ width: percent + "%" }}
      >
        <StarIcon className={"fill-darkGreen " + size} />
      </div>
    </div>
  );
};

export default RatingStars;
