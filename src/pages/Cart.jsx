import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
 
  const del = (itemId) => {
    
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart); // Update the cart state
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="font-bold text-4xl text-gray-800 mb-8 mt-12 text-center font-serif">
        Your Cart
      </h1>

      <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {cart.length > 0 ? (
          cart.map((crd) => (
            <div key={crd.id} className="flex flex-col sm:flex-row items-center justify-between border-b py-4">
              <div className="flex items-center space-x-4">
                <img className="h-32 w-32 object-cover rounded-lg" src={crd.image} alt={crd.name} />

                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{crd.name}</h2>
                  <p className="text-gray-500 text-sm">
                    {crd.tags?.[0]} {crd.tags?.[1]} {crd.tags?.[2]}
                  </p>
                  <p className="text-gray-500 text-sm capitalize">{crd.cuisine}</p>
                  <p className="text-gray-500 text-sm">Delivery time: {crd.prepTimeMinutes} minutes</p>
                </div>
              </div>

              <div className="flex space-x-4 mt-4 sm:mt-0">
                <Link to="/payment">
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all">
                    Order Now
                  </button>
                </Link>
                <button
                  onClick={() => del(crd.id)} // Pass the item id to the delete function
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all"
                >
                  Delete Item
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
