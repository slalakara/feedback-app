"use client"
import React from 'react';
import "@/components/FeedbackBoardCards/sidebar/sidebar.css"
import FilterBox from '../filter-box/filter-box';
import RoadmapBox from '../roadmap-box/roadmap-box';

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-boxes">
          <FilterBox />
          <RoadmapBox />
        </div>
      <style jsx>{`
        .sidebar {
          width: 250px;
          height: 100vh;
          background-color: #F7F8FD;
          color: white;
          position: fixed;
          top: 0;
          right: ${isOpen ? '0' : '-300px'};
          z-index: -1;
          padding-top: 90px;
          transition: right 0.3s ease;
        }
       
        ul {
          list-style-type: none;
          padding: 0;
        }
        ul li {
          margin: 15px 0;
          text-align: center;
        }
        ul li a {
          color: white;
          text-decoration: none;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
}
