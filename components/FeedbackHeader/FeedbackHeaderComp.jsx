"use client"
import { useState } from "react";
import AddFeedbackBtn from "@/components/FeedbackHeader/addFeedbackBtn";
import FeedbackHeader from "@/components/FeedbackHeader/feedbackHeader";
import HeaderFilter from "@/components/FeedbackHeader/headerFilter";
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
      <FeedbackHeader />
      <HeaderFilter />
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
