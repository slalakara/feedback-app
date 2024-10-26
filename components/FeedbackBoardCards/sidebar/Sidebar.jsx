"use client"
import React from 'react';
import "@/components/FeedbackBoardCards/sidebar/sidebar.css"

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>✖</button>
      <ul>
        <li><a href="#">Anasayfa</a></li>
        <li><a href="#">Hakkımızda</a></li>
        <li><a href="#">Hizmetler</a></li>
        <li><a href="#">İletişim</a></li>
      </ul>
      <style jsx>{`
        .sidebar {
          width: 250px;
          height: 100vh;
          background-color: #333;
          color: white;
          position: fixed;
          top: 0;
          right: ${isOpen ? '0' : '-250px'};
          z-index: 1;
          padding-top: 20px;
          transition: right 0.3s ease;
        }
        .close-btn {
          font-size: 24px;
          color: white;
          background: none;
          border: none;
          cursor: pointer;
          position: absolute;
          top: 10px;
          right: 10px;
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
