"use client";
import Link from 'next/link';
import CommentsBtn from "./comment-btn/comment-btn";
import LikeBtn from "./like-btn/like-btn";
import "./feedback-card.css";

export default function FeedbackCard({ feedback }) {
  return (
    <ul className="card-items">
      <li className="card-item">
        
        {/* Desktop view like button */}
        <div className="desktopLikeBtn">
          <LikeBtn voteCount={feedback.voteCount} feedbackId={feedback.id} />
        </div>

        <div className="card-item-text">
          <Link href={`getfeedbackdetail/${feedback.id}`}>
            <h4>{feedback.title}</h4>
            <p>{feedback.detail}</p>
            <button className="statusBtn">{feedback.status}</button>
          </Link>
        </div>

        <div className="feedbackcard-btns">
          <LikeBtn voteCount={feedback.voteCount} feedbackId={feedback.id} />
          <CommentsBtn commentsCount={feedback.commentsCount} />
        </div>

        <div className="desktopCommentsBtn">
          <CommentsBtn commentsCount={feedback.commentsCount} />
        </div>
      </li>
    </ul>
  );
}
