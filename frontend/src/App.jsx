import { useEffect } from "react";
import { themeChange } from "theme-change";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <>
      <Header />
      <main className="h-[85vh]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
