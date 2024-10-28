"use client"
import { useEffect, useState } from "react";
import { fetchFeedbacks } from "@/utils/service";
import LikeBtn from "./like-btn/like-btn";
import CommentsBtn from "./comment-btn/comment-btn";
import "@/components/FeedbackCard/feedback-card.css";

export default function FeedbackCard({ searchParams }) {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetchFeedbacks(searchParams?.category);
      setFeedbacks(data);
    }
    getData();
  }, [searchParams]);

  return (
    <ul className="card-items">
      {feedbacks.map((feedback) => (
        <li key={feedback.id} className="card-item">
          <div className="desktopLikeBtn">
            <LikeBtn voteCount={feedback.voteCount} />
          </div>
          <div className="card-item-text">
            <h4>{feedback.title}</h4>
            <p>{feedback.detail}</p>
            <button className="statusBtn">{feedback.status}</button>
          </div>
          <div className="feedbackcard-btns">
            <LikeBtn voteCount={feedback.voteCount} />
            <CommentsBtn comments={feedback.comments.length} />
          </div>
          <div className="desktopCommentsBtn">
            <CommentsBtn comments={feedback.comments.length} />
          </div>
        </li>
      ))}
    </ul>
  );
}