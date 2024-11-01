"use client";
import { useState, useEffect } from "react";
import Comments from '@/components/comments/Comments';
import FeedbackHeaderComp from "@/components/FeedbackHeader/FeedbackHeaderComp";
import styles from "@/app/PostDetail/PostDetail.css";
import { fetchFeedbackDetail } from '@/utils/fetchFunc';

export default function FeedbackDetailPage({ params }) {
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    async function getFeedbackDetail() {
      try {
        const data = await fetchFeedbackDetail(params.id);
        setFeedback(data);
      } catch (error) {
        console.error("Feedback detayları alınamadı:", error);
      }
    }
    getFeedbackDetail();
  }, [params.id]);

  if (!feedback) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <div className={styles.container}>
      
      <div className={styles.feedbackDetail}>
        <h1>{feedback.title}</h1>
        <p>{feedback.description}</p>
        <button className="statusBtn">{feedback.status}</button>
        <Comments comments={feedback.comments} />
      </div>
    </div>
  );
}
