"use client";

import { useGetProducts } from "@/api/produtcts.api";
import Image from "next/image";

export default function Home() {
  const { data: products } = useGetProducts();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {products?.results?.map((product) => (
        <div key={product.gtin} className="">
          <Image
            src={product.images[0] ?? ""}
            alt="Image"
            width={300}
            height={800}
            className="rounded-md object-cover"
            style={{
              objectFit: "cover",
            }}
          />
          <div>{product.libelle}</div>
          <div className="text-slate-400">
            {product.date_date_fin_commercialisation}
          </div>
        </div>
      ))}
    </div>
  );
}
