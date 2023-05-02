import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../features/product/productDetailSlice";
import Loading from "../components/Loading";
import Message from "../components/Message";
import NumberInput from "../components/NumberInput";
import { addToCart } from "../features/cart/cartSlice";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const { loading, productDetail, error } = useSelector(
    (state) => state.productDetail
  );

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  const product = {
    id: productDetail.id,
    name: productDetail.name,
    image: productDetail.image,
    price: productDetail.price,
    cartQuantity: quantity,
  };

  return (
    <div className="w-full mx-auto">
      <Link to={"/"} className="mb-3 btn btn-ghost">
        <FaArrowLeft className="mr-1" /> Back
      </Link>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message alert_type="error">{error}</Message>
      ) : (
        <div className="flex w-full">
          <div className="grid flex-grow place-items-center">
            <img src={productDetail.image} />
          </div>
          <div className="divider-horizontal"></div>
          <div className="flex flex-col flex-grow gap-6">
            <h2 className="text-2xl">{productDetail.name}</h2>
            <h4 className="text-xl">Price : ${productDetail.price}</h4>
            <h6 className="text-lg">
              Description : ${productDetail.description}
            </h6>
            <p>
              Status -{" "}
              {productDetail.stock_count > 0 ? "In Stock" : "Out of Stock"}
            </p>
            <Rating
              rating={productDetail.rating}
              text={`${productDetail.numReviews} reviews`}
            />
            {productDetail.stock_count > 0 ? (
              <div className="flex items-center">
                Quantity :{" "}
                <NumberInput value={quantity} onChange={setQuantity} />
              </div>
            ) : (
              ""
            )}

            <button
              onClick={() => addToCartHandler(product)}
              className="btn btn-secondary"
              disabled={productDetail.stock_count == 0}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
