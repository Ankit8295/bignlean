import { ApiPaths } from "@/constants";
import { useMutation } from "@tanstack/react-query";
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

async function updateProfile(formData: any) {
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
      localStorage.setItem("AUTH", JSON.stringify(res?.data));
    },
  });
}
