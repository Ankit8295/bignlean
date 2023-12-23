"use client";
import { redirect } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function AuthWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (!localStorage?.AUTH) redirect("/login");
  }, []);

  return <>{children}</>;
}
