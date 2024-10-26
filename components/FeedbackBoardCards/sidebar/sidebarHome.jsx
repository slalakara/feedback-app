"use client"
import { useState } from 'react';
import Sidebar from './Sidebar';
import "@/components/FeedbackBoardCards/sidebar/sidebar.css"

export default function SidebarHome() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="sidebar-header">
        <div className="sidebar-header-text">
          <h4>Frontend Mentor</h4>
          <p>Feedback Board</p>
        </div>
        <button className="burger-menu" onClick={toggleSidebar}>
          {isSidebarOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <style jsx>{`
        .burger-menu {
          font-size: 24px;
          cursor: pointer;
          padding: 10px;
          border: none;
          background: none;
          z-index: 2;
        }

        @media (min-width: 768px) {
          .burger-menu {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
