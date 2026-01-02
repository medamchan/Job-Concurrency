import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", margin: "1rem", width: "200px", textAlign: "center" }}>
      <img src={product.image} alt={product.name} width={150} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link href={`/product/${product.id}`}>View Details</Link>
    </div>
  );
}
