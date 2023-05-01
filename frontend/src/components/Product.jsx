import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div>
      <div className="shadow-xl card w-96 bg-base-100">
        <figure>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
          </Link>
        </figure>
        <Link to={`/product/${product._id}`} className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <Rating
            rating={product.rating}
            text={`${product.numReviews} reviews`}
          />
          <div className="items-center justify-between card-actions">
            <p className="text-lg font-semibold">${product.price}</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
