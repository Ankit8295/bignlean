"use client";
import { ApiPaths } from "@/constants";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

async function getCartList(userId?: string | null) {
  if (userId) {
    return axios({
      method: "GET",
      url: base_url + ApiPaths.CART_USER + "/" + userId,
    });
  }
}

export function useGetCartList(userId?: string | null) {
  return useQuery({
    queryKey: ["cart"],
    queryFn: () => getCartList(userId),
  });
}

async function addToCartList(userId: number, product: number, qty: number) {
  if (userId) {
    return axios({
      method: "POST",
      url: base_url + ApiPaths.CART,
      data: { user: userId, product, qty },
    });
  }
}

export function useAddToCartList() {
  return useMutation({
    mutationFn: (payload: { userId: number; product: number; qty: number }) =>
      addToCartList(payload?.userId, payload?.product, payload?.qty),
  });
}

async function removeFromCart(productId: number) {
  return axios({
    method: "DELETE",
    url: base_url + ApiPaths.CART + "/" + productId,
  });
}
async function updateQuantityFromCart(productId: number, qty: number) {
  return axios({
    method: "PUT",
    url: base_url + ApiPaths.CART + "/" + productId,
    data: { qty },
  });
}

export function useRemoveFromCart() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (productId: number) => removeFromCart(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
}

export function useUpdateQuantityFromCart() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: { productId: number; qty: number }) =>
      updateQuantityFromCart(payload?.productId, payload?.qty),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
}

async function getProductDetail(productId: number) {
  return axios({
    method: "GET",
    url: base_url + ApiPaths.PRODUCTS + "/" + "6" + "/" + productId,
  });
}

export function useGetProductDetail(productId: number) {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => getProductDetail(productId),
  });
}
