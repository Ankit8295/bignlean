"use client";
import { ApiPaths } from "@/constants";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

async function getAllAddresses(userId: number) {
  if (userId) {
    return axios({
      method: "GET",
      url: base_url + ApiPaths.ADDRESSES_USER + "/" + userId,
    });
  }
}

export function useGetAllAddresses(userId: number) {
  return useQuery({
    queryKey: ["addresses"],
    queryFn: () => getAllAddresses(userId),
  });
}

async function addAddress(formData: any, userId: number) {
  return axios({
    method: "POST",
    url: base_url + ApiPaths.ADDRESSES,
    headers: {
      "Content-Type": "application/json",
    },
    data: { ...formData, user: userId },
  });
}

export function useAddAddress() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: { formData: any; userId: number }) =>
      addAddress(payload?.formData, payload?.userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["addresses"] });
    },
  });
}

async function updateAddress(addressId: string, formData: any) {
  return axios({
    method: "PUT",
    url: base_url + ApiPaths.ADDRESSES + "/" + addressId,
    headers: {
      "Content-Type": "application/json",
    },
    data: formData,
  });
}

export function useUpdateAddress() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: { formData: any; addressId: string }) =>
      updateAddress(payload?.addressId, payload?.formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["addresses"] });
    },
  });
}

async function removeAddress(addressId: number) {
  return axios({
    method: "DELETE",
    url: base_url + ApiPaths.ADDRESSES + "/" + addressId,
  });
}

export function useRemoveAddress() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (addressId: number) => removeAddress(addressId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["addresses"] });
    },
  });
}
