import { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const { data } = await axios.get("/api/products");
    setProducts(data);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="my-2 text-center h1">Products</h1>
      <div className="flex flex-wrap w-5/6 gap-4 mx-auto">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
