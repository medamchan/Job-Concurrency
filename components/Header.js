"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header style={{ padding: "1rem", background: "#f0f0f0", display: "flex", justifyContent: "space-between" }}>
      <h2>My Store</h2>
      <nav>
        <Link href="/">Home</Link> |{" "}
        <Link href="/cart">Cart ({totalItems})</Link>
      </nav>
    </header>
  );
}
