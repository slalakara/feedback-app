"use client"; 

import { useState } from 'react';
import AddComment from "@/components/addComments/addComments";
import Comments from "@/components/comments/Comments";
import "./comment.css";
import FeedbackCard from "@/components/FeedbackCard";
import GoBack from "@/components/GoBack/gobackBtn";
import EditFeedbackBtn from '@/components/EditFeedbackBtn/editfeedbackBtn';
import EditModal from '@/components/EditFeedbackComp/page';

export default function CommentArea() {
  const [isModalOpen, setModalOpen] = useState(false); 

  const handleEditClick = () => {
    setModalOpen(true); 
  };

  const handleCloseModal = () => {
    setModalOpen(false); 
  };

  return (
    <div className="feedbackDetailContainer">
      <div className="detailcompHeader">
        <GoBack />
        <EditFeedbackBtn onEditClick={handleEditClick} />
      </div>
      <FeedbackCard />
      <div className="commentContainer">
        <Comments />
        <AddComment />
      </div>
      {isModalOpen && <EditModal onClose={handleCloseModal} />} 
    </div>
  );
}
