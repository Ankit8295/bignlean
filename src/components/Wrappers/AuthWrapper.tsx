"use client";
import { redirect } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function AuthWrapper({ children }: { children: ReactNode }) {
  const [auth, getAuth] = useState(null);
  useEffect(() => {
    if (localStorage) {
      getAuth(localStorage?.AUTH);
    } else {
      getAuth(null);
    }
  }, []);
  if (auth) {
    return <>{children}</>;
  }
  redirect("/login");
}
