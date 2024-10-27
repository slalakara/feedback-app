"use client"
import { useState } from "react";
import AddFeedbackBtn from "@/components/FeedbackHeader/addFeedbackBtn";
import FeedbackHeader from "@/components/FeedbackHeader/feedbackHeader";
import HeaderFilter from "@/components/FeedbackHeader/headerFilter";
import NewPage from "@/components/new/page";
import "./sude.css";
import Comments from "@/components/comments/Comments";

export default function Deneme() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="deniyorum">
        <FeedbackHeader />
        <HeaderFilter />
        <AddFeedbackBtn onClick={handleOpenModal} />
      </div>

    </>
  );
}
