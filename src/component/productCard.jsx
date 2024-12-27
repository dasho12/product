import React from "react";
import Rate from "./Rate";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  const rating = Math.round(data.rating);

  return (
    <div className="w-[300px] h-[420px] bg-gray-50 border border-gray-300 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300">
      <div className="relative h-[60%] w-full">
        <img
          src={data.thumbnail}
          alt={data.title}
          className="w-full h-full rounded-t-lg object-cover"
        />
        <span className="absolute top-2 right-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded">
          ${data.price}
        </span>
      </div>
      <div className="px-4 py-3 h-[40%] flex flex-col justify-between">
        <h2 className="text-sm text-gray-600 uppercase font-medium tracking-wide">
          {data.category}
        </h2>
        <h1 className="text-lg font-semibold text-gray-800 truncate">
          {data.title}
        </h1>
        <div className="flex items-center justify-center mt-2">
          {Array.from({ length: Math.round(data.rating) }).map((_, i) => (
            <span key={i} className="text-yellow-400 ">
              &#9733;
            </span>
          ))}
        </div>
        <Link to={`/product/${data.id}`} className="hover:text-emerald-600">
          <button className="mt-4 w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition duration-200">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
