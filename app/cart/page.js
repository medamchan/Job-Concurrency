"use client";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) return <p style={{ padding: "2rem" }}>Your cart is empty.</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Your Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id} style={{ margin: "1rem 0" }}>
            {item.name} - ${item.price} x {item.qty} = ${(item.price * item.qty).toFixed(2)}
            <button
              onClick={() => removeFromCart(item.id)}
              style={{ marginLeft: "1rem", cursor: "pointer" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
}
