import { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

import products from "../sample-products";
import Rating from "../components/Rating";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  async function fetchProduct() {
    const { data } = await axios.get(`/api/products/${id}`);
    setProduct(data);
  }
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      <Link to={"/"} className="mb-3 btn btn-ghost">
        <FaArrowLeft className="mr-1" /> Back
      </Link>
      <div className="flex w-full">
        <div className="grid flex-grow place-items-center">
          <img src={product.image} />
        </div>
        <div className="divider-horizontal"></div>
        <div className="flex flex-col flex-grow gap-6">
          <h2 className="text-2xl">{product.name}</h2>
          <h4 className="text-xl">Price : ${product.price}</h4>
          <h6 className="text-lg">Description : ${product.description}</h6>
          <p>
            Status - {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
          </p>
          <Rating
            rating={product.rating}
            text={`${product.numReviews} reviews`}
          />
          <button
            className="btn btn-secondary"
            disabled={product.stock_count == 0}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
