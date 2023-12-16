"use client";
import { ApiPaths } from "@/constants";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

async function updateProfile(formData: any) {
  const auth = localStorage.AUTH ? JSON.parse(localStorage.AUTH) : null;
  return axios({
    method: "PUT",
    url: base_url + ApiPaths.USERS + "/" + auth?.user?.id,
    data: formData,
  });
}

export function useUpdateProfile() {
  return useMutation({
    mutationFn: (formData: any) => updateProfile(formData),
    onSuccess: (res) => {
      window.localStorage.setItem("AUTH", JSON.stringify(res?.data));
    },
  });
}
