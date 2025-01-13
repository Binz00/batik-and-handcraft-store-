import React from "react";
import { CartState } from "../context/Context";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const navigate = useNavigate();

  const total = cart.reduce(
    (acc, curr) => acc + Number(curr.old_price - curr.new_price) * curr.qty,
    0
  );

  const sizeApplicableCategories = ["newarrivals", "silkcollection", "cotton", "men"];

  const handleProceedToCheckout = () => {
    navigate("/CardDetails", { 
      state: { 
        totalPayment: Number(total),
        cartItems: cart // Pass the cart items to payment page
      }
    });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-[#053B5D] mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="p-8 text-center bg-white rounded shadow">
          <h2 className="text-xl text-[#053B5D]">Your cart is empty</h2>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 mt-4 text-white bg-[#053B5D] rounded hover:bg-[#053B5D]/90"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((prod) => (
              <div
                key={prod.id}
                className="flex flex-col p-4 bg-white rounded shadow"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="object-cover w-20 h-20 rounded"
                  />
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-[#053B5D]">
                      {prod.p_name}
                    </h2>
                    <p className="text-sm text-[#676D71]">Category: {prod.category}</p>
                  </div>
                  <span className="text-xl font-semibold text-[#FCCC0A]">
                    LKR {prod.old_price - prod.new_price}.00
                  </span>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex space-x-4">
                    {sizeApplicableCategories.includes(prod.category) && (
                      <select
                        value={prod.size || "M"}
                        onChange={(e) =>
                          dispatch({
                            type: "CHANGE_CART_SIZE",
                            payload: { id: prod.id, size: e.target.value },
                          })
                        }
                        className="w-24 p-2 text-center border rounded text-[#053B5D]"
                      >
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                        <option value="XXXL">XXXL</option>
                      </select>
                    )}
                    <input
                      type="number"
                      value={prod.qty}
                      min="1"
                      onChange={(e) =>
                        dispatch({
                          type: "CHANGE_CART_QTY",
                          payload: { id: prod.id, qty: Number(e.target.value) },
                        })
                      }
                      className="w-16 p-2 text-center border rounded text-[#053B5D]"
                    />
                  </div>

                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-semibold text-[#053B5D]">
                      Subtotal: LKR {(prod.old_price - prod.new_price) * prod.qty}.00
                    </span>
                    <FaTrashAlt
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payload: prod })
                      }
                      className="text-2xl text-red-500 cursor-pointer hover:text-red-700"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 mt-6 bg-white rounded shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg text-[#053B5D]">Items in Cart: {cart.length}</span>
              <h2 className="text-2xl font-bold text-[#053B5D]">
                Total: LKR {total}.00
              </h2>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => navigate("/")}
                className="px-6 py-3 text-[#053B5D] border border-[#053B5D] rounded hover:bg-gray-100"
              >
                Continue Shopping
              </button>
              <button
                onClick={handleProceedToCheckout}
                className="px-6 py-3 text-white bg-[#053B5D] rounded hover:bg-[#053B5D]/90"
                disabled={cart.length === 0}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
