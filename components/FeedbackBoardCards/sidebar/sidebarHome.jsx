"use client";
import { useState } from 'react';
import Sidebar from './Sidebar';
import FilterBox from '../filter-box/filter-box';
import RoadmapBox from '../roadmap-box/roadmap-box';
import "@/components/FeedbackBoardCards/sidebar/sidebar.css";
import BoardBoxHeader from '../boardbox-header/box-header';

export default function SidebarHome() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="Home">
      <div className="mobile-boardbox-header">
        <BoardBoxHeader />
        <button className="burger-menu" onClick={toggleSidebar}>
          {isSidebarOpen ? '✖' : '☰'}
        </button>
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="FeedbackBoardHeaderDesktop">
        {/* <div className="desktop-boardbox-header">
          <BoardBoxHeader />
        </div> */}
        <FilterBox />
        <RoadmapBox />
      </div>

      <style jsx>{`
        .burger-menu {
          font-size: 24px;
          cursor: pointer;
          padding: 10px;
          border: none;
          background: none;
          z-index: 4;
        }

        .mobile-boardbox-header {
          display: block;
        }

        .desktop-boardbox-header {
          display: none;
        }

        .FeedbackBoardHeaderTablet {
          display: none;
        }

        .FeedbackBoardHeaderDesktop {
          padding-top: 56px;
          padding-bottom: 46px;
          display: none;
          flex-direction: row;
          align-items: center;
          gap: 20px; /* Aralarındaki boşluk */
        }

        @media (min-width: 768px) {
          .burger-menu {
            display: none;
          }

          .mobile-boardbox-header {
            display: table-column-group;
          }

          .desktop-boardbox-header {
            display: block;
          }

          .sidebar-header {
            display: none;
          }

          .FeedbackBoardHeaderTablet {
            display: flex;
            justify-content: space-around;
          }

          .FeedbackBoardHeaderDesktop {
            display: flex;
          }
        }

        @media(min-width: 1110px) {
        .FeedbackBoardHeaderTablet {
          display: none;
        }

        .FeedbackBoardHeaderDesktop {
          display: flex;
          flex-direction: column;
          position: absolute;
          padding-top: 95px;
          padding-left: 165px;
          gap: 20px;
          ;
        }
      }
      `}</style>
    </div>
  );
}
