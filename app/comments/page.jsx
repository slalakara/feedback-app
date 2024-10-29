"use client";

import { useState } from 'react'; 
import AddComment from "@/components/addComments/addComments"; 
import Comments from "@/components/comments/Comments"; 
import "./comment.css"; 
import FeedbackCard from "@/components/FeedbackCard"; 
import GoBack from "@/components/GoBack/gobackBtn"; 
import EditFeedbackBtn from '@/components/EditFeedbackBtn/editfeedbackBtn'; 
import EditModal from '@/components/EditFeedbackComp/page'; 
import { useRouter } from 'next/navigation'; 

export default function CommentArea() { 
  const [isModalOpen, setModalOpen] = useState(false); 
  const router = useRouter(); 
  const [comments, setComments] = useState([]);

  const handleEditClick = () => { 
    setModalOpen(true); 
  }; 

  const handleCloseModal = () => { 
    setModalOpen(false); 
  }; 

  const handleHomeBack = () => { 
    setModalOpen(false); 
    router.push('/'); 
  };

  const handleCommentAdded = (newComment) => { 
    setComments((prevComments) => [...prevComments, newComment]); 
  }; 

  return ( 
    <div className="feedbackDetailContainer"> 
      <div className="detailcompHeader"> 
        <GoBack onGoBack={handleHomeBack} /> 
        <EditFeedbackBtn onEditClick={handleEditClick} /> 
      </div> 
      <FeedbackCard /> 
      <div className="commentContainer"> 
        <Comments comments={comments} />
        <AddComment onCommentAdded={handleCommentAdded} /> 
      </div> 
      {isModalOpen && <EditModal onClose={handleCloseModal} />} 
    </div> 
  ); 
}
