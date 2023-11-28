"use client";
import { redirect } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function AuthWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    const auth = localStorage?.getItem("AUTH");
    if (!auth) {
      redirect("/login");
    }
  }, []);
  return <>{children}</>;
}
