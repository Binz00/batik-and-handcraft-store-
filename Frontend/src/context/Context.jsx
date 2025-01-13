import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { cartReducer } from './Reducers';

// Create the Cart Context
const CartContext = createContext();

// CartProvider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [], // Initial state for the cart
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Add PropTypes validation for children
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook to use the Cart context
export const CartState = () => useContext(CartContext);

// Add a default export
export default CartProvider;
