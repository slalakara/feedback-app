"use client"
import { useState } from "react";
import AddFeedbackBtn from "./addFeedbackBtn";
import FeedbackHeader from "./feedbackHeader";
import HeaderFilter from "./headerFilter";
import NewPage from "../new/page";
import "./FeedbackHeader.css";

export default function FeedbackHeaderComp() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="Header">
      <div className="short">
        <FeedbackHeader />
        <HeaderFilter />
      </div>
      <AddFeedbackBtn onClick={openModal} />

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <NewPage onCancel={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
}
