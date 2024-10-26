"use client"
import { useState } from "react";
import AddFeedbackBtn from "@/components/FeedbackHeader/addFeedbackBtn";
import FeedbackHeader from "@/components/FeedbackHeader/feedbackHeader";
import HeaderFilter from "@/components/FeedbackHeader/headerFilter";
import NewPage from "@/components/new/page";
import "./sude.css";
import Edit from "@/components/svgs/edit";
import EditModal from "@/components/EditFeedbackComp/page";

export default function Deneme() {
  const [showNewPage, setShowNewPage] = useState(false); 

  const handleAddFeedbackClick = () => {
    setShowNewPage(true); 
  };

  const handleCancelClick = () => {
    setShowNewPage(false); 
  };

  return (
    <>
      <div className="deniyorum">
        <FeedbackHeader />
        <HeaderFilter />
        <AddFeedbackBtn onAddFeedbackClick={handleAddFeedbackClick} />
      </div>
      
   
      {showNewPage && <NewPage onCancel={handleCancelClick} />}
    </>
  );
}
