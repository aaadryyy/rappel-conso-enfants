"use client";

import { useQuery } from "@tanstack/react-query";

const productsQueryKeys = {
  list: ["products", "list"],
};

export const useGetProducts = (): any => {
  return useQuery({
    queryKey: productsQueryKeys.list, // add filters etc... in the key here
    queryFn: async () => {
      const defaultApiPath =
        "https://data.economie.gouv.fr/api/explore/v2.1/catalog/datasets/rappelconso-v2-gtin-trie/records?limit=20";
      const data = await fetch(defaultApiPath);
      return await data.json();
    },
  });
};
