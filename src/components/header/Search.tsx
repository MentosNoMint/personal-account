import {useState} from "react";
import {cn} from "@/lib/cn";

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");

  const isExpanded = isFocused && query.length > 0;

  return (
    <div className="flex flex-col w-full">
      <label
        className={cn(
          "w-full bg-white rounded-3xl px-5 z-20 transition-all duration-300 flex flex-col ease-in-out overflow-hidden",
          isExpanded ? "min-h-[7.5rem]" : "min-h-16"
        )}
      >
        <div className="w-full flex items-center mt-5.5">
          <img
            src="/assets/images/search.svg"
            className="w-3.5 h-3.5 opacity-65"
            alt="icon"
          />
          <input
            className="w-full h-full px-4 focus:ring-0 border-none bg-transparent outline-none"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
        <div className={cn(
          "flex flex-col mt-4",
          isExpanded ? "visible" : "hidden",
        )}>
          <div className="w-full h-px bg-black/10"></div>
          <span className="text-black/80 font-medium text-base text-center mt-4">Ничего не найдено</span>
        </div>
      </label>
    </div>
  );
};

export default Search;
