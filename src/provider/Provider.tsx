import { ReactNode } from "react";
import ContextProvider from "./ContextProvider/ContextProvider";

export default function Provider({ children }: { children: ReactNode }) {
  return <ContextProvider>{children}</ContextProvider>;
}
