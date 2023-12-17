"use client";
import { ApiPaths } from "@/constants";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

async function getAllOrder(userId: number) {
  if (userId) {
    return axios({
      method: "GET",
      url: base_url + ApiPaths.ORDER_USER + "/" + userId,
    });
  }
}

export function useGetAllOrder(userId: number) {
  return useQuery({
    queryKey: ["order"],
    queryFn: () => getAllOrder(userId),
  });
}

async function cancelOrder(data: any, userId: number) {
  if (userId) {
    return axios({
      method: "DELETE",
      url: base_url + ApiPaths.CANCEL_ORDER,
      data: { ...data, user: userId },
    });
  }
}

export function useCancelOrder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: { data: any; userId: number }) =>
      cancelOrder(payload?.data, payload?.userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["order"] });
    },
  });
}

async function placeOrder(
  userId: number,
  addressid: string,
  couponCode: string
) {
  if (!addressid) {
    return;
  }
  const payload = {
    userid: userId,
    addressid,
    couponCode,
    paymentMethod: "Pre-paid",
  };
  return axios({
    method: "POST",
    url: base_url + ApiPaths.PLACE_ORDER,
    headers: {
      "Content-Type": "application/json",
    },
    data: payload,
  });
}

export function usePlaceOrder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: {
      userId: number;
      addressid: string;
      couponCode: string;
    }) => placeOrder(payload?.userId, payload?.addressid, payload?.couponCode),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["order"] });
    },
  });
}
