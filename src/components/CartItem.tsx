import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemsprops = {
  cartItem: any;
};

const CartItem = ({ cartItem }: CartItemsprops) => {
  return (
    <div className="cart-item">
      <img src={cartItem.photo} alt={cartItem.name} />
      <article>
        <Link to={`/product/${cartItem.productId}`}>{cartItem.name}</Link>
        <span>₹{cartItem.price}</span>
      </article>
      <div>
        <button>-</button>
        <p>{cartItem.quantity}</p>
        <button>+</button>
      </div>
      <div>
        <button>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
