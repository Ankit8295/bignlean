"use client";
import { redirect } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function AuthWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const auth = localStorage?.AUTH;
      if (!auth) {
        redirect("/login");
      }
    }
  }, []);
  return <>{children}</>;
}
