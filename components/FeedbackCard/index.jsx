"use client";
import Link from 'next/link';
import CommentsBtn from "./comment-btn/comment-btn";
import LikeBtn from "./like-btn/like-btn";
import "./feedback-card.css";


export default function FeedbackCard({ feedback }) {
  const { id, title, detail, status, voteCount, commentCount } = feedback;

  return (
    <ul className="card-items">
      <li className="card-item">
        
        <div className="desktopLikeBtn">
          <LikeBtn voteCount={voteCount} feedbackId={id} />
        </div>

        <div className="card-item-text">
       
          <Link href={`/PostDetail/${id}`}>
            <h4>{title}</h4>
            <p>{detail}</p>
            <button className="statusBtn">{status}</button>
          </Link>
        </div>

        <div className="feedbackcard-btns">
          <LikeBtn voteCount={voteCount} feedbackId={id} />
          <CommentsBtn commentsCount={commentCount} />
        </div>

        <div className="desktopCommentsBtn">
          <CommentsBtn commentsCount={commentCount} />
        </div>
      </li>
    </ul>
  );
}
