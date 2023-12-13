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

async function getAllOrder() {
  return axios({
    method: "GET",
    url: base_url + ApiPaths.ORDER_USER + "/" + auth?.user?.id,
  });
}

export function useGetAllOrder() {
  return useQuery({
    queryKey: ["order"],
    queryFn: getAllOrder,
  });
}

async function cancelOrder(data: any) {
  return axios({
    method: "DELETE",
    url: base_url + ApiPaths.CANCEL_ORDER,
    data: { ...data, user: auth?.user?.id },
  });
}

export function useCancelOrder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => cancelOrder(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["order"] });
    },
  });
}

async function placeOrder() {
  const addressid = localStorage.getItem("address");
  const couponCode = localStorage.getItem("couponCode");
  if (!addressid) {
    return;
  }
  const payload = {
    userid: auth?.user?.id,
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
    mutationFn: () => placeOrder(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["order"] });
    },
  });
}
