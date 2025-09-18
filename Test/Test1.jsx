import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg p-4 bg-white">
      <img
        className="w-full h-48 object-cover rounded-lg"
        src={product.image}
        alt={product.name}
      />
      <div className="mt-4">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-600 mt-1">{product.description}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-semibold text-green-600">
            ₹{product.price}
          </span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

// Sample usage
const Test1 = () => {
  const product = {
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1580894908361-967195033f2d?auto=format&fit=crop&w=500&q=80",
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ProductCard product={product} />
    </div>
  );
};

export default Test1;
