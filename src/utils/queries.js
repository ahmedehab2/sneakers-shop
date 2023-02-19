import { client } from "./client";

export async function fetchProducts(query) {
  const response = await client.fetch(query);

  return response;
}
export async function fetchBanner(query) {
  const response = await client.fetch(query);

  return response;
}

export async function fetchProduct(slug) {
  const query = `*[_type=='product' && slug.current=='${slug}']`;
  const response = await client.fetch(query);

  return response;
}
