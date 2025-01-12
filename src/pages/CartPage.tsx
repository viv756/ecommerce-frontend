import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const subtotal = 600;
const cartItems = [
  {
    productId: "jqdwwd",
    photo: "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg",
    name: "Macbook",
    price: 100000,
    quantity: 40,
    stock: 10,
  },
];
const tax = Math.round(subtotal * 0.18);
const shippingCharge = 200;
const total = subtotal + tax + shippingCharge;
const discount = 345;

const CartPage = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsvalidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) setIsvalidCouponCode(true);
      else setIsvalidCouponCode(false);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
      setIsvalidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <main>
     { cartItems.length > 0 ? (   cartItems.map((i, idx) => (
          <CartItem key={idx} cartItem={i} />
     ))) : (
            <h1>No Items Added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal :₹{subtotal} </p>
        <p>Shipping charges:₹{shippingCharge} </p>
        <p>Tax : ₹{tax}</p>
        <p>
          <em> - ₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}

        {cartItems.length > 0 && <Link to={"/shipping"}>Checkout</Link>}
      </aside>
    </div>
  );
};

export default CartPage;
