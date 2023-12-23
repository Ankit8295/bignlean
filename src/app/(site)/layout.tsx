"use client";
import { Footer, NavBar, SecondaryNavbar } from "@/components";
import MobileFooter from "@/components/Footer/MobileFooter";
import { useDispatchContext } from "@/provider/ContextProvider/ContextProvider";
import { ReactNode, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }: { children: ReactNode }) {
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
      <ToastContainer />
      <NavBar />
      <SecondaryNavbar />
      <div className="max-[890px]:pb-[70px]">{children}</div>
      <Footer />
      <MobileFooter />
    </div>
  );
}
