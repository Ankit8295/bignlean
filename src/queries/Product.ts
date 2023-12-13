import { ApiPaths } from "@/constants";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
let auth: any = null;
if (typeof window !== "undefined") {
  // 👉️ can use localStorage here
  auth = localStorage.getItem("AUTH")
    ? JSON.parse(localStorage.getItem("AUTH")!)
    : null;
} else {
  // 👉️ can't use localStorage
}

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

async function getWishList() {
  if (!auth) return;
  return axios({
    method: "GET",
    url: base_url + ApiPaths.WISHLIST + `/${auth?.user?.id}`,
  });
}

export function useGEtWishList() {
  return useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishList,
  });
}

async function addToWishList(productId: number) {
  if (!auth) return;
  return axios({
    method: "POST",
    url: base_url + ApiPaths.FAVORITES,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    data: JSON.stringify({ user: auth?.user?.id, product: productId }),
  });
}

export function useAddToWishList() {
  return useMutation({
    mutationFn: (data: { productId: number }) => addToWishList(data?.productId),
  });
}

async function removeFromWishList(productId: number) {
  if (!auth) return;
  return axios({
    method: "DELETE",
    url:
      base_url +
      ApiPaths.WISHLIST +
      "/" +
      auth?.user?.id +
      "/product/" +
      productId,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}

export function useRemoveFormWishList() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { productId: number }) =>
      removeFromWishList(data?.productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });
}
