import { ApiPaths } from "@/constants";
import { redirect, useRouter } from "next/navigation";

export async function loginUser(formData: any) {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + ApiPaths.USERS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: formData,
  });
  return res;
}

export function logout() {
  localStorage?.setItem("AUTH", "");
  window.location.replace("/login");
}
