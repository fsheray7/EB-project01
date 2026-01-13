import React, { useState, useEffect } from "react";
import { HiTrash } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";
import { FiTag } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";
import { getCart, removeFromCart, updateQuantity } from "../../utils/cartUtils";

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(getCart());

  useEffect(() => {
    const handleCartChange = () => {
      setCartItems(getCart());
    };

    window.addEventListener("cartChange", handleCartChange);
    return () => window.removeEventListener("cartChange", handleCartChange);
  }, []);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal * 0.2;
  const deliveryFee = cartItems.length > 0 ? 15 : 0;
  const total = subtotal - discount + deliveryFee;

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 xl:px-30 2xl:px-40 py-10 font-poppins min-h-[60vh]">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-[#00000099] mb-4">
        <Link to="/shop" className="hover:text-black">Shop</Link>
        <span className="mx-2 text-[#000000]">› Cart</span>
      </nav>

      {/* Title */}
      <h1 className="text-start text-4xl font-bold text-[#000000] mb-8">Your cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500 mb-6 font-medium">Your cart is empty</p>
          <Link to="/shop" className="bg-[#D8A85B] text-white px-10 py-3 rounded-full hover:bg-[#b08945] transition font-bold shadow-md">
            Go to Shop
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT – CART ITEMS */}
          <div className="lg:col-span-2 w-full space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="border border-[#0000001A] rounded-xl py-4 px-6 hover:shadow-sm transition bg-white">
                <div className="flex items-center gap-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 md:w-30 md:h-30 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-[#000000] text-lg">{item.title}</h3>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#FF3333] text-2xl hover:scale-110 transition cursor-pointer"
                        title="Remove item"
                      >
                        <HiTrash />
                      </button>
                    </div>
                    <p className="text-sm text-[#000000] mt-1">
                      Quantity : <span className="text-[#00000099]">{item.quantity}</span>
                    </p>
                    <p className="text-sm text-[#000000] mt-1">
                      Net wt : <span className="text-[#00000099]">{item.weight}</span>
                    </p>

                    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-start justify-between mt-4">
                      <p className="font-bold text-lg text-[#000000]">${(item.price * item.quantity).toFixed(2)}</p>

                      {/* Quantity Control */}
                      <div className="flex bg-[#F0F0F0] rounded-[62px] items-center border border-gray-100">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-4 py-2 hover:text-[#D8A85B] transition font-bold text-lg"
                        >
                          −
                        </button>
                        <span className="px-2 font-semibold w-8 text-center text-[#000000]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-4 py-2 hover:text-[#D8A85B] transition font-bold text-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT – ORDER SUMMARY */}
          <div className="border w-full border-[#0000001A] rounded-xl p-6 h-fit bg-white sticky top-10 shadow-sm">
            <h2 className="font-bold text-xl text-[#000000] mb-6 border-b border-[#0000001A] pb-4">Order Summary</h2>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-[#00000099]">Subtotal</span>
                <span className="text-[#000000] font-bold">${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-[#FF3333]">
                <span className="text-[#00000099]">Discount (20%)</span>
                <span className="font-bold">- ${discount.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#00000099]">Delivery Fee</span>
                <span className="text-[#000000] font-bold">${deliveryFee.toFixed(2)}</span>
              </div>

              <hr className="border-[#0000001A]" />

              <div className="flex text-[#000000] justify-between text-xl">
                <span className="font-bold">Total</span>
                <span className="font-bold text-[#000000]">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Promo Code */}
            <div className="mt-8">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <FiTag className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg text-[#00000066]" />
                  <input
                    type="text"
                    placeholder="Add promo code"
                    className="w-full px-6 py-3 pl-12 bg-[#F0F0F0] rounded-full text-sm outline-none focus:ring-1 focus:ring-[#D8A85B] transition"
                  />
                </div>
                <button className="px-6 py-3 rounded-full bg-black text-white text-xs font-bold hover:bg-gray-800 transition uppercase tracking-wider">
                  Apply
                </button>
              </div>
            </div>

            {/* Checkout */}
            <button
              onClick={handleCheckout}
              className="w-full mt-8 bg-[#000000] text-white py-3 rounded-full text-sm  flex items-center justify-center cursor-pointer gap-4 hover:bg-[#00000099] transition shadow-lg uppercase tracking-widest"
            >
              Go to Checkout <FaArrowRight className="text-lg" />
            </button>


          </div>
        </div>
      )}
    </section>
  );
}
