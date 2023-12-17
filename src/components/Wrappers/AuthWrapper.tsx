"use client";
import { redirect } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function AuthWrapper({ children }: { children: ReactNode }) {
  const [auth, getAuth] = useState(null);
  useEffect(() => {
    if (window) {
      getAuth(localStorage?.AUTH);
    } else {
      getAuth(null);
    }
  }, [window]);
  if (auth) {
    return <>{children}</>;
  }
  redirect("/login");
}
