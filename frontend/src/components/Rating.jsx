import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ rating, text }) => {
  return (
    <div>
      <div className="flex items-center">
        <span>
          {rating >= 1 ? (
            <FaStar color="#fb923c" />
          ) : rating >= 0.5 ? (
            <FaStarHalfAlt color="#fb923c" />
          ) : (
            <FaRegStar color="#fb923c" />
          )}
        </span>
        <span>
          {rating >= 2 ? (
            <FaStar color="#fb923c" />
          ) : rating >= 1.5 ? (
            <FaStarHalfAlt color="#fb923c" />
          ) : (
            <FaRegStar color="#fb923c" />
          )}
        </span>
        <span>
          {rating >= 3 ? (
            <FaStar color="#fb923c" />
          ) : rating >= 2.5 ? (
            <FaStarHalfAlt color="#fb923c" />
          ) : (
            <FaRegStar color="#fb923c" />
          )}
        </span>
        <span>
          {rating >= 4 ? (
            <FaStar color="#fb923c" />
          ) : rating >= 3.5 ? (
            <FaStarHalfAlt color="#fb923c" />
          ) : (
            <FaRegStar color="#fb923c" />
          )}
        </span>
        <span>
          {rating >= 5 ? (
            <FaStar color="#fb923c" />
          ) : rating >= 4.5 ? (
            <FaStarHalfAlt color="#fb923c" />
          ) : (
            <FaRegStar color="#fb923c" />
          )}
        </span>
        <span className="ml-1">{text && text}</span>
      </div>
    </div>
  );
};

export default Rating;
