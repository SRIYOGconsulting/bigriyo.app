"use client";

import { SearchIcon, XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ServiceSearchBarProps {
  initialQuery: string;
}

const ServiceSearchBar = ({ initialQuery }: ServiceSearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim() !== "") router.push(`/repair?query=${encodeURIComponent(searchQuery)}`);
    else router.push("/repair");
  };

  return (
    <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 shadow-sm transition-all duration-300 focus-within:border-primary">
      <SearchIcon className="w-4 h-4 text-muted-foreground shrink-0" />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        placeholder="Search services..."
        className="bg-transparent w-full text-sm text-foreground outline-none placeholder:text-muted-foreground"
      />
      {searchQuery && (
        <button
          type="button"
          onClick={() => {
            setSearchQuery("");
            handleSearch();
          }}
          className="text-muted-foreground hover:text-foreground p-0.5 cursor-pointer"
          aria-label="Clear text">
          <XIcon className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default ServiceSearchBar;
