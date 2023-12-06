import { ApiPaths } from "@/constants";
import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const auth = JSON.parse(localStorage.getItem("AUTH")!);

async function getCartList() {
  if (!auth) return;

  return axios({
    method: "GET",
    url: base_url + ApiPaths.CART_USER + "/" + auth?.user?.id,
  });
}

export function useGetCartList() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: getCartList,
  });
}

async function addToCartList(product: number, qty: number) {
  if (!auth) return;
  return axios({
    method: "POST",
    url: base_url + ApiPaths.CART,
    data: { user: auth?.user?.id, product, qty },
  });
}

export function useAddToCartList() {
  return useMutation({
    mutationFn: (payload: { product: number; qty: number }) =>
      addToCartList(payload?.product, payload?.qty),
  });
}

async function removeFromCart(productId: number) {
  return axios({
    method: "DELETE",
    url: base_url + ApiPaths.CART + productId,
  });
}
async function updateQuantityFromCart(productId: number, qty: number) {
  return axios({
    method: "PUT",
    url: base_url + ApiPaths.CART + productId,
    data: JSON.stringify({ qty }),
  });
}

export function useRemoveFromCart() {
  return useMutation({
    mutationFn: (productId: number) => removeFromCart(productId),
  });
}

export function useUpdateQuantityFromCart() {
  return useMutation({
    mutationFn: (payload: { productId: number; qty: number }) =>
      updateQuantityFromCart(payload?.productId, payload?.qty),
  });
}
