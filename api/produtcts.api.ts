"use client";

import type { Product } from "@/model/product.model";
import { transformProductImages } from "@/utils/api.utils";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

const productsQueryKeys = {
  list: ["products", "list"],
};

type useGetProductsType = {
  results: Array<Product>;
  total_count: number;
};
export const useGetProducts = (): UseQueryResult<useGetProductsType, Error> => {
  return useQuery({
    queryKey: productsQueryKeys.list, // add filters etc... in the key here
    queryFn: async () => {
      const defaultApiPath =
        "https://data.economie.gouv.fr/api/explore/v2.1/catalog/datasets/rappelconso-v2-gtin-trie/records?limit=20";
      const data = await fetch(defaultApiPath);
      return await data.json();
    },
    select: transformProductImages,
  });
};
