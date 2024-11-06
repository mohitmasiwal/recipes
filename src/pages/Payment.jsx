import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Payment = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg m-10 transition-all">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-200">
          Payment Information
        </h2>

        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              className="w-full mt-2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:border-blue-500 transition-all"
              placeholder="John Doe"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              className="w-full mt-2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:border-blue-500 transition-all"
              placeholder="johndoe@example.com"
            />
          </div>

          {/* Address Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Address
            </label>
            <input
              type="text"
              className="w-full mt-2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:border-blue-500 transition-all"
              placeholder="123 Main St, City, Country"
            />
          </div>

          {/* Card Details Section */}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mt-8">
            Card Details
          </h3>

          {/* Card Number Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Card Number
            </label>
            <input
              type="text"
              className="w-full mt-2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:border-blue-500 transition-all"
              placeholder="1234 5678 9101 1121"
            />
          </div>

          {/* Expiry Date and CVV Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Expiry Date
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full mt-2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                CVV
              </label>
              <input
                type="text"
                placeholder="123"
                className="w-full mt-2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Total Price */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
              Order Total: $79.99
            </h3>
          </div>

          {/* Buy Now Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all"
          >
            Buy Now
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
