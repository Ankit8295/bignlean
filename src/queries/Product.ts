"use client";
import { ApiPaths } from "@/constants";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

async function getWishList(userId: number) {
  if (userId) {
    return axios({
      method: "GET",
      url: base_url + ApiPaths.WISHLIST + `/${userId}`,
    });
  }
}

export function useGEtWishList(userId: number) {
  return useQuery({
    queryKey: ["wishlist"],
    queryFn: () => getWishList(userId),
  });
}

async function addToWishList(productId: number, userId: number) {
  if (userId) {
    return axios({
      method: "POST",
      url: base_url + ApiPaths.FAVORITES,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      data: JSON.stringify({ user: userId, product: productId }),
    });
  }
}

export function useAddToWishList() {
  return useMutation({
    mutationFn: (data: { productId: number; userId: number }) =>
      addToWishList(data?.productId, data?.userId),
  });
}

async function removeFromWishList(productId: number, userId: number) {
  if (userId) {
    return axios({
      method: "DELETE",
      url:
        base_url + ApiPaths.WISHLIST + "/" + userId + "/product/" + productId,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
  }
}

export function useRemoveFormWishList() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { productId: number; userId: number }) =>
      removeFromWishList(data?.productId, data?.userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });
}
