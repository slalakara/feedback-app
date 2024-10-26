"use client";
import { useState } from "react";
import "./feedbackHeader.css";

export default function HeaderFilter() {
  const [selectedFilter, setSelectedFilter] = useState("Most Upvotes");
  const [showOptions, setShowOptions] = useState(false);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => setShowOptions(false), 10000);
  };

  return (
    <div
      className="header-filter"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="filter-text">
        Sort by: <strong>{selectedFilter}</strong> 
      </p>
      {showOptions && (
        <div className="filter-options">
          <p
            className={`filter-option ${
              selectedFilter === "Most Upvotes" ? "selected" : ""
            }`}
            onClick={() => handleFilterClick("Most Upvotes")}
          >
            Most Upvotes{" "}
            {selectedFilter === "Most Upvotes" && (
              <span className="check-mark">✔</span>
            )}
          </p>
          <p
            className={`filter-option ${
              selectedFilter === "Least Upvotes" ? "selected" : ""
            }`}
            onClick={() => handleFilterClick("Least Upvotes")}
          >
            Least Upvotes{" "}
            {selectedFilter === "Least Upvotes" && (
              <span className="check-mark">✔</span>
            )}
          </p>
          <p
            className={`filter-option ${
              selectedFilter === "Most Comments" ? "selected" : ""
            }`}
            onClick={() => handleFilterClick("Most Comments")}
          >
            Most Comments{" "}
            {selectedFilter === "Most Comments" && (
              <span className="check-mark">✔</span>
            )}
          </p>
          <p
            className={`filter-option ${
              selectedFilter === "Least Comments" ? "selected" : ""
            }`}
            onClick={() => handleFilterClick("Least Comments")}
          >
            Least Comments{" "}
            {selectedFilter === "Least Comments" && (
              <span className="check-mark">✔</span>
            )}
          </p>
        </div>
      )}
    </div>
  );
}
