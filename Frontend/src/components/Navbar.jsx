import React, { useEffect, useState } from 'react';
import logo from '../assets/images/Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { CartState } from '../context/Context';

function Navbar() {
  const [showButton, setShowButton] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate hook

  const {
    state: { cart },
  } = CartState(); // Get cart state from context

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCartNavigation = () => {
    navigate('/cart');
  };

  return (
    <div className='sticky top-0 z-10 bg-white'>
      <nav className='max-w-screen-xl px-6 py-4 mx-auto'>
        <div className='flex items-center justify-between'>
          <img src={logo} alt='logo' className='object-contain w-auto h-11' />
          <ul className='hidden md:flex md:gap-14'>
            <li className='font-semibold text-black'>
              <Link to="/">Home</Link>
            </li>
            <li className='font-semibold text-black'>
              <Link to="/shop">Shop</Link>
            </li>
            <li className='font-semibold text-black'>
              <Link to="/about">About Us</Link>
            </li>
            <li className='font-semibold text-black'>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <ul className='hidden md:flex md:gap-3'>
            <li>
              <button className="flex items-center py-2 text-xs font-bold text-black duration-300 border px-7 bg-NavBlue rounded-2xl hover:scale-110">
                <FaSearch className="mr-1" />
                Search
              </button>
            </li>
            <li>
              {localStorage.getItem("auth-token") ? (
                <button className="flex items-center py-2 text-xs font-bold text-black duration-300 border px-7 bg-NavBlue rounded-2xl hover:scale-110" onClick={() => { localStorage.removeItem("auth-token"); window.location.replace("/") }}>
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <button className="flex items-center py-2 text-xs font-bold text-black duration-300 border px-7 bg-NavBlue rounded-2xl hover:scale-110">
                    <FaUser className="mr-1" />
                    Login
                  </button>
                </Link>
              )}
            </li>
            <li>
              <button onClick={handleCartNavigation} className="flex items-center py-2 text-xs font-bold text-black duration-300 border px-7 bg-NavBlue rounded-2xl hover:scale-110">
                <FaShoppingCart className="mr-1" />
                Cart
                {cart.length > 0 && (
                  <span className="px-2 ml-2 text-xs text-white bg-red-600 rounded-full">
                    {cart.length}
                  </span>
                )}
              </button>
            </li>
          </ul>
          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
