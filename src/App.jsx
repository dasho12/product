import React, { useState, useEffect } from "react";
import "./App.css";
import ProductCard from "./component/productCard";
import ProductDetails from "./component/single";

function App() {
  const [productData, setProductData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => setProductData(data.products));
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        const formattedCategories = Array.isArray(data)
          ? data.map((cat) => (typeof cat === "string" ? cat : cat.name))
          : [];
        setCategories(formattedCategories);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex flex-row flex-wrap gap-4 mb-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-emerald-600 text-white px-4 py-2 rounded shadow cursor-pointer hover: bg-eremald-700 "
          >
            {category}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-[30px] items-center justify-between space-y-4">
        {productData.map((el, index) => (
          <ProductCard key={index} data={el} />
        ))}
      </div>
    </div>
  );
}

export default App;
