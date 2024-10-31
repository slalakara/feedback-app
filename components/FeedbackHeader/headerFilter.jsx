"use client"
import { useState } from "react";
import OpenFilter from "../svgs/openfilter";
import DefaultFilter from "../svgs/defaultfilter";
import "./feedbackHeader.css";

export default function HeaderFilter({ onFilterChange }) {
  const [selectedFilter, setSelectedFilter] = useState("Most Upvotes");
  const [showOptions, setShowOptions] = useState(false);

  const handleFilterClick = (filter, id) => {
    setSelectedFilter(filter);
    onFilterChange(id); 
    setShowOptions(false); 
  };

  return (
    <div className="header-filter">
      <p className="filter-text" onClick={() => setShowOptions(!showOptions)}>
        Sort by : <strong>{selectedFilter}</strong>
        <span style={{ marginLeft: "8px", display: "inline-flex", alignItems: "center" }}>
          {showOptions ? <DefaultFilter /> : <OpenFilter />}
        </span>
      </p>
      {showOptions && (
        <div className="filter-options">
          <p
            className={`filter-option ${selectedFilter === "Most Upvotes" ? "selected" : ""}`}
            onClick={() => handleFilterClick("Most Upvotes", "1")}
          >
            Most Upvotes
          </p>
          <p
            className={`filter-option ${selectedFilter === "Least Upvotes" ? "selected" : ""}`}
            onClick={() => handleFilterClick("Least Upvotes", "2")}
          >
            Least Upvotes
          </p>
          <p
            className={`filter-option ${selectedFilter === "Most Comments" ? "selected" : ""}`}
            onClick={() => handleFilterClick("Most Comments", "3")}
          >
            Most Comments
          </p>
          <p
            className={`filter-option ${selectedFilter === "Least Comments" ? "selected" : ""}`}
            onClick={() => handleFilterClick("Least Comments", "4")}
          >
            Least Comments
          </p>
        </div>
      )}
    </div>
  );
}
