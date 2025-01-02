import type { Product } from "@/model/product.model";

type transformProductImagesParams = {
  results: Array<Product>;
  total_count: string;
};
export const transformProductImages = (data: transformProductImagesParams) => {
  const toto = data.results.map((product) => {
    const newProduct = structuredClone(product);
    newProduct.images = product.liens_vers_les_images.split("|");
    return newProduct;
  });
  return { ...data, results: toto };
};
