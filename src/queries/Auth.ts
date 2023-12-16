"use client";
import { ApiPaths } from "@/constants";

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
  if (typeof window !== "undefined") {
    localStorage.AUTH = "";
    window.location.replace("/login");
  }
}
