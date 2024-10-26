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
      {/* Burger Menü Butonu (Açık veya Kapalı Duruma Göre Değişen Simge) */}
      <button className="burger-menu" onClick={toggleSidebar}>
        {isSidebarOpen ? '✖' : '☰'}
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <style jsx>{`
        .burger-menu {
          font-size: 24px;
          cursor: pointer;
          padding: 10px;
          border: none;
          background: none;
          position: fixed;
          top: 10px;
          left: 10px;
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
