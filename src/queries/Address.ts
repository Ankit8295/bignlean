"use client";
import { ApiPaths } from "@/constants";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

async function getAllAddresses() {
  const auth = localStorage.AUTH ? JSON.parse(localStorage.AUTH) : null;

  if (!auth) return;
  return axios({
    method: "GET",
    url: base_url + ApiPaths.ADDRESSES_USER + "/" + auth?.user?.id,
  });
}

export function useGetAllAddresses() {
  return useQuery({
    queryKey: ["addresses"],
    queryFn: getAllAddresses,
  });
}

async function addAddress(formData: any) {
  const auth = localStorage.AUTH ? JSON.parse(localStorage.AUTH) : null;

  return axios({
    method: "POST",
    url: base_url + ApiPaths.ADDRESSES,
    headers: {
      "Content-Type": "application/json",
    },
    data: { ...formData, user: auth?.user?.id },
  });
}

export function useAddAddress() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (formData: any) => addAddress(formData),
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
