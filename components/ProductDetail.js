"use client";

import { useCart } from "../context/CartContext";

export default function ProductDetail({ product }) {
  const { addToCart } = useCart();

  if (!product) return <p>Product not found</p>;

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>{product.name}</h1>
      <img src={product.image} width={200} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        style={{ padding: "0.5rem 1rem", marginTop: "1rem", cursor: "pointer" }}
      >
        Add to Cart
      </button>
    </div>
  );
}
