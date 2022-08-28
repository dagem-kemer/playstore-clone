import react, { useState } from "react";
import "./starRate.css";
import "./output.css";
const StarRating = (props) => {
  const [rating, setRating] = useState(1);
  const [hover, setHover] = useState(1);

  return (
    <div className="star-rating ml-8">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => {
              setRating(index);
              props.rate(index);
            }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star text-3xl">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
