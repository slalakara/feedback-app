"use client"
import { useState } from "react";
import Likes from "@/components/svgs/likes";
import "@/components/FeedbackCard/like-btn/like-btn.css";

export default function LikeBtn({ voteCount, feedbackId }) {
  const [likes, setLikes] = useState(voteCount);

  const handleLike = async () => {
    try {
      const response = await fetch(`https://feedback.mkadirgulgun.com.tr/votefeedback/${feedbackId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: 123 }) //userid yok
      });

      if (response.ok) {
        setLikes((prevLikes) => prevLikes + 1);
      } else {
        console.error("Failed to post like.");
      }
    } catch (error) {
      console.error("An error occurred during the like operation:", error);
    }
  };

  return (
    <div className="LikeBtn">
      <button className="like-btn" onClick={handleLike}>
        <Likes /> <span>{likes}</span>
      </button>
    </div>
  );
}
