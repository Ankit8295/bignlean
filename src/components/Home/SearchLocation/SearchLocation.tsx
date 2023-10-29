"use client";
import { CurrentLLocationIcon } from "@/Icons";
import Searchbar from "../../SearchBar/Searchbar";
import SearchLocationItem from "./SearchLocationItem";
import {
  useAppContext,
  useDispatchContext,
} from "@/provider/ContextProvider/ContextProvider";

export default function SearchLocation() {
  const { locationToggle } = useAppContext();
  const dispatch = useDispatchContext();
  return (
    <div className="w-[1000px] max-[1000px]:w-full mx-auto my-7 relative">
      <div className="flex items-center gap-8">
        <Searchbar
          onBlur={() => dispatch({ type: "LOCATION_TOGGLE_OFF" })}
          onFocus={() => dispatch({ type: "LOCATION_TOGGLE_ON" })}
          label="Loaction"
        />
        <div className="flex items-center gap-2">
          <CurrentLLocationIcon />
          <p className="text-gray-900 text-xs not-italic font-medium whitespace-nowrap">
            Use Current Location
          </p>
        </div>
      </div>
      {locationToggle && (
        <div className="absolute bg-white rounded-xl top-full w-full left-0 sm-1 z-30 py-4">
          <SearchLocationItem />
          <SearchLocationItem />
          <SearchLocationItem />
          <SearchLocationItem />
          <SearchLocationItem />
        </div>
      )}
    </div>
  );
}
