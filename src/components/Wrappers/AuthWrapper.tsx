"use client";
import { redirect } from "next/navigation";
import { ReactNode, useLayoutEffect } from "react";

export default function AuthWrapper({ children }: { children: ReactNode }) {
  useLayoutEffect(() => {
    const auth = localStorage?.getItem("AUTH");
    if (!auth) {
      redirect("/login");
    }
  }, []);
  return <>{children}</>;
}
