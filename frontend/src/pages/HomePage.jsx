import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { getProducts } from "../features/product/productSlice";
import Loading from "../components/Loading";
import Message from "../components/Message";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const { loading, products, error } = useSelector((state) => state.products);

  return (
    <div>
      <h1 className="my-2 text-center h1">Products</h1>

      {loading ? (
        <div className="flex justify-center">
          <Loading />
        </div>
      ) : error ? (
        <div className="w-1/3 mx-auto">
          <Message alert_type="error" message={error} />
        </div>
      ) : (
        <div className="flex flex-wrap w-5/6 gap-4 mx-auto">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
