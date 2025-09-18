import React from "react";

const ProductCard = ({ name, description, price, image }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg p-4 bg-white">
      <img
        className="w-full h-48 object-cover rounded-lg"
        src={image}
        alt={name}
      />
      <div className="mt-4">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-gray-600 mt-1">{description}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-semibold text-green-600">
            ₹{price}
          </span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Test2 = () => {
  const product = {
    name: "Smart Watch",
    description: "Stylish smartwatch with fitness tracking features",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=500&q=80",
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ProductCard {...product} />
    </div>
  );
};

export default Test2;

