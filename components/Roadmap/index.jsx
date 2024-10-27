"use client";
import { useState } from "react";
import RoadmapHeader from "@/components/Roadmap/RoardmapHeader/roadmapheader";
import "@/components/Roadmap/roadmap.css";
import LikeBtn from "@/components/FeedbackCard/like-btn/like-btn";
import CommentsBtn from "@/components/FeedbackCard/comment-btn/comment-btn";

export default function Roadmap() {
  const [selectedStatus, setSelectedStatus] = useState("Planned");

  const feedbacks = {
    Planned: [
      { title: "Planned Feedback 1", status: "Planned" },
      { title: "Planned Feedback 2", status: "Planned" },
    ],
    "In-Progress": [
      { title: "In-Progress Feedback 1", status: "In-Progress" },
      { title: "In-Progress Feedback 2", status: "In-Progress" },
      { title: "In-Progress Feedback 3", status: "In-Progress" },
    ],
    Live: [{ title: "Live Feedback 1", status: "Live" }],
  };

  return (
    <div className="roadmap">
      <RoadmapHeader />
      <div className="mobileSelectedStatus">
        <ul className="status-list">
          {["Planned", "In-Progress", "Live"].map((status) => (
            <li key={status}>
              <button
                onClick={() => setSelectedStatus(status)}
                className={`${selectedStatus === status ? "active" : ""} ${status.toLowerCase()}`}
              >
                {status} <span>({feedbacks[status].length})</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="desktop">
        {Object.keys(feedbacks).map((status) => (
          <div key={status}>
            <h3>{status}</h3>
            {feedbacks[status].map((feedback, index) => (
              <div key={index} className={`feedback-card ${feedback.status.toLowerCase()}`}>
                <div className="Live-text">
                  <span className="live">•</span> {feedback.status}
                </div>
                <span>2</span>
                <div className="live-item-text">
                  <h4>{feedback.title}</h4>
                  <p>Easier to search for solutions based on a specific stack.</p>
                  <button className="statusBtn">Enhancement</button>
                </div>
                <div className="feedbackLike-btns">
                  <LikeBtn />
                  <CommentsBtn />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="feedback-list">
        {feedbacks[selectedStatus].map((feedback, index) => (
          <div key={index} className={`feedback-card ${feedback.status.toLowerCase()}`}>
            <div className="Live-text">
              <span className="live">•</span> Live
            </div>
            <span>2</span>
            <div className="live-item-text">
              <h4>{feedback.title}</h4>
              <p>Easier to search for solutions based on a specific stack.</p>
              <button className="statusBtn">Enhancement</button>
            </div>
            <div className="feedbackLike-btns">
              <LikeBtn />
              <CommentsBtn />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}