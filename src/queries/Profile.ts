import { ApiPaths } from "@/constants";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const auth = localStorage.getItem("AUTH")
  ? JSON.parse(localStorage.getItem("AUTH")!)
  : null;

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
