"use client"; // must be client to use hooks

import { useParams } from "next/navigation";
import products from "../../../data/products";
import ProductDetail from "../../../components/ProductDetail";

export default function ProductPage() {
  const { id } = useParams(); // get dynamic route param
  const product = products.find((p) => p.id === parseInt(id));

  return <ProductDetail product={product} />;
}
