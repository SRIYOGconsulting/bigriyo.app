"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

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

  const handleClear = () => {
    setSearchQuery("");
    router.push("/repair");
  };

  return (
    <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 shadow-sm transition-all duration-300 focus-within:border-primary">
      <Image width={16} height={16} src="/icons/search.svg" alt="search" />
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
          onClick={handleClear}
          className="text-muted-foreground hover:text-foreground p-0.5 cursor-pointer"
          aria-label="Clear text">
          <Image width={16} height={16} src="/icons/cross.svg" alt="cross" />
        </button>
      )}
    </div>
  );
};

export default ServiceSearchBar;
