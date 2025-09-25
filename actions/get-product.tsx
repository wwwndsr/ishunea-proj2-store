import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product | null> => {
  try {
    const res = await fetch(`${URL}/${id}`);

    if (!res.ok) {
      return null;
    }

    const data: Product = await res.json();
    return {
      ...data,
      images: data.images ?? [],
    };
  } catch (error) {
    console.error("[getProduct ERROR]", error);
    return null;
  }
};

export default getProduct;
