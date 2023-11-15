"use client";
import { Footer, NavBar, SecondaryNavbar } from "@/components";
import { useDispatchContext } from "@/provider/ContextProvider/ContextProvider";
import { ReactNode, useEffect } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  const dispatch = useDispatchContext();
  useEffect(() => {
    const func = () => {
      dispatch({ type: "SET_SLIDE_PER_VIEW", payload: window.innerWidth });
    };
    func();
    window.addEventListener("resize", func);

    return () => window.removeEventListener("resize", func);
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9]">
      <NavBar />
      <SecondaryNavbar />
      {children}
      <Footer />
    </div>
  );
}
