"use client";

import { useGetProducts } from "@/api/produtcts.api";

export default function Home() {
  const { data: products } = useGetProducts();
  console.log("data", products);
  return (
    <div>
      {products?.results?.map((product) => (
        <div>{product.gtin}</div>
      ))}
    </div>
  );
}
