import { URL } from "./url";

export type ProductDTO = {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
};

export async function getProducts(): Promise<ProductDTO[]> {
    const r = await fetch(`${URL}/products`);
    if(!r.ok) throw new Error(`GET /products ${r.status}`);
    return r.json();
}

export async function createProduct(body: Omit<ProductDTO, "id">): Promise<ProductDTO> {
    const r = await fetch(`${URL}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });
    if (!r.ok) throw new Error(`POST /products ${r.status}`);
    return r.json();
}