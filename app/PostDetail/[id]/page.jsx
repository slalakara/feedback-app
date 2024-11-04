"use client";
import { useState, useEffect } from "react";
import FeedbackHeaderComp from "@/components/FeedbackHeader/FeedbackHeaderComp";
import Comments from '@/components/comments/Comments';
import AddComment from "@/components/addComments/addComments";
import FeedbackCard from "@/components/FeedbackCard";
import GoBack from "@/components/GoBack/gobackBtn";
import EditFeedbackBtn from '@/components/EditFeedbackBtn/editfeedbackBtn';
import EditModal from '@/components/EditFeedbackComp/page';
import styles from "@/app/PostDetail/PostDetail.css";
import { useRouter } from 'next/navigation';
import { fetchFeedbackDetail, fetchCommentsByFeedback } from '@/utils/fetchFunc'; 

export default function FeedbackDetailPage({ params }) {
  const [feedback, setFeedback] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function getFeedbackDetail() {
      try {
        const feedbackData = await fetchFeedbackDetail(params.id);
        setFeedback(feedbackData);

        const commentsData = await fetchCommentsByFeedback(params.id);
        setComments(commentsData || []); 
      } catch (error) {
        console.error("Feedback detayları alınamadı:", error);
      }
    }
    getFeedbackDetail();
  }, [params.id]);

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

  if (!feedback) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <div className={styles.container}>
      
      <div className="feedbackDetailContainer">
        <div className="detailcompHeader">
          <GoBack onGoBack={handleHomeBack} />
          <EditFeedbackBtn onEditClick={handleEditClick} />
        </div>
        <FeedbackCard feedback={feedback} />
        <div className="commentContainer">
          <Comments comments={comments} />
          <AddComment onCommentAdded={handleCommentAdded} />
        </div>
        {isModalOpen && <EditModal onClose={handleCloseModal} />}
      </div>
    </div>
  );
}
