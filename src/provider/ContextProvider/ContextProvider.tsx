"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  useReducer,
  useContext,
} from "react";
import { initialState } from "./InitialState";
import { Actions } from "@/utils/Types";
import { reducer } from "./Reducer";

const AppContext = createContext(initialState);

const DispatchContext = createContext<Dispatch<Actions>>(({}: Actions) => {});

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
export const useDispatchContext = () => useContext(DispatchContext);
