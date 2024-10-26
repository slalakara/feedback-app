"use client"
import CommentsBtn from "./comment-btn/comment-btn";
import LikeBtn from "./like-btn/like-btn";
import "@/components/FeedbackCard/feedback-card.css"

export default function FeedbackCard() {
  return(
    <ul className="card-items">
      <li className="card-item">
        <div className="desktopLikeBtn"><LikeBtn /></div>
        <div className="card-item-text">
          <h4>Add tags for solutions</h4>
          <p>Easier to search for solutions based on a specific stack.</p>
          <button className="statusBtn">Enhancement</button>
        </div>
        <div className="feedbackcard-btns">
          <LikeBtn />
          <CommentsBtn />
        </div>
        <div className="desktopCommentsBtn"><CommentsBtn /></div>
      </li>
    </ul>
  )
}