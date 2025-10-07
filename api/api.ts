import { ImageSourcePropType } from "react-native";
import { URL } from "url";

export type Product = {
  id: Number;
  title: string;
  image: ImageSourcePropType;   
  price: number;
  description: string;
};

export async function getProducts(): Promise<Product[]> {
  const products = await fetch(`${URL}/products`);
  return products.json();
}

export async function createProduct(body: Omit<Product, "id">): Promise<Product> {
  const r = await fetch(`${URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return r.json();
}