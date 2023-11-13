"use client";
import Searchbar from "@/components/SearchBar/Searchbar";
import RecentSearch from "./RecentSearch/RecentSearch";
import TrendingSearches from "./TrendingSearches/TrendingSearches";
import {
  useAppContext,
  useDispatchContext,
} from "@/provider/ContextProvider/ContextProvider";

export default function SearchForProducts() {
  const { recentSearchToggle } = useAppContext();
  const dispatch = useDispatchContext();

  return (
    <div className="relative w-[438px] max-[500px]:w-full">
      <Searchbar
        onFocus={() => dispatch({ type: "RECENT_SEARCH_TOGGLE_ON" })}
        onBlur={() => dispatch({ type: "RECENT_SEARCH_TOGGLE_OFF" })}
        className="w-full"
        label="products"
      />
      {recentSearchToggle && (
        <div className="absolute top-full bg-white py-4 px-5 w-full sm-1 rounded-xl translate-y-[5px] z-30">
          <h3 className="text-black text-lg not-italic font-semibold mb-4">
            Recent Searches
          </h3>
          <RecentSearch />
          <div className="h-[1px] w-[90%] bg-black opacity-10 mx-auto my-6"></div>
          <TrendingSearches />
        </div>
      )}
    </div>
  );
}
