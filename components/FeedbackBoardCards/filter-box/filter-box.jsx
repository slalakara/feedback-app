"use client"
import { useState } from 'react';
import "@/components/FeedbackBoardCards/filter-box/filter-box.css"

export default function FilterBox() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="FilterBoxButtons">
      {["All", "UI", "UX", "Enhancement", "Bug", "Feature"].map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterClick(filter)}
          className={selectedFilter === filter ? "selected" : ""}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
