import React from 'react';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { CartState } from '../context/Context';

const ProductCard = ({ image, brand, title, price, product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const navigate = useNavigate();

  const handleCartClick = () => {
    dispatch({
      type: cart.some((p) => p.id === product.id) ? 'REMOVE_FROM_CART' : 'ADD_TO_CART',
      payload: {
        ...product, // Ensure full product object
        qty: 1, // Default quantity
      },
    });
  };

  return (
    <div className="relative flex flex-col justify-between w-full p-4 mb-4 transition duration-200 ease-in-out border border-green-200 shadow-lg cursor-pointer sm:w-1/2 md:w-1/4 rounded-3xl">
      <img src={image} alt={title} className="object-cover w-full mb-4 rounded-lg h-66 hover:scale-110" />
      <div className="text-left des">
        <span className="block text-lg font-semibold">{brand}</span>
        <h5 className="mb-2 text-xl font-bold">{title}</h5>
        <div className="flex star">
          <FaStar className="text-yellow-400 fas fa-star" />
          <FaStar className="text-yellow-400 fas fa-star" />
          <FaStar className="text-yellow-400 fas fa-star" />
          <FaStar className="text-yellow-400 fas fa-star" />
        </div>
        <div className="flex items-center justify-between mt-2">
          <h4 className="text-xl font-semibold">LKR {price}.00</h4>
          <button
            onClick={handleCartClick}
            className="px-4 text-2xl text-black hover:text-gray-800"
          >
            <FaShoppingCart className="fal fa-shopping-cart" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
