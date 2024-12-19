import { useContext } from "react";
import CartContext from "../context/cartContext";

const CartPage = () => {
  const { cart, removeFromCart, getTotalPrice } = useContext(CartContext);
  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="cart-items">
          {cart.map((item) => (
            <tr key={item.product._id}>
              <td>{item.product.name}</td>
              <td>{item.product.price} TND</td>
              <td>
                <h2>{item.quantity}</h2>
              </td>
              <td>
                <button
                  onClick={() => removeFromCart(item.product)}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-summary">
        <h2>
          Total:<span id="cart-total">{getTotalPrice()} TND</span>
        </h2>
        <button id="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
