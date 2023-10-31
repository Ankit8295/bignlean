import { Footer, NavBar } from "@/components";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9]">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
