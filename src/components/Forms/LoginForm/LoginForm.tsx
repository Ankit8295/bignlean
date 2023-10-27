"use client";
import { useAppContext } from "@/provider/ContextProvider/ContextProvider";

export default function LoginForm() {
  const { test } = useAppContext();
  console.log(test);
  return <div>LoginForm</div>;
}
