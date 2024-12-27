import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 bg-white h-[80vh] w-full text-gray-800 flex flex-col justify-between  items-center rounded-lg shadow-lg max-w-lg mx-auto hover:shadow-2xl">
      <div className="text-center">
        <h1 className="text-2xl font-extrabold text-emerald-600 mb-2">
          {product.title}
        </h1>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
      </div>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-64 h-64 rounded-lg shadow-md object-cover mb-6 hover:shadow-2xl"
      />
      <div className="w-full px-6">
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-semibold text-gray-700">Price:</p>
          <p className="text-xl font-bold text-emerald-600">${product.price}</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-semibold text-gray-700">Rating:</p>
          <p className="text-lg text-yellow-500">
            {Array.from({ length: Math.round(product.rating) }).map((_, i) => (
              <span key={i}>&#9733;</span>
            ))}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-gray-700">Brand:</p>
          <p className="text-lg text-gray-600">{product.brand}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
