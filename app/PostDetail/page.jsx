"use client"
import { useState, useEffect } from "react";
import Link from "next/link";  
import SidebarHome from "@/components/FeedbackBoardCards/sidebar/SidebarHome";
import FeedbackCard from "@/components/FeedbackCard";
import FeedbackHeaderComp from "@/components/FeedbackHeader/FeedbackHeaderComp";
import "@/app/PostDetail/PostDetail.css";
import { fetchFeedbacks } from "@/utils/fetchFunc";
import EmptyPage from "@/components/FeedbackCard/empty";
import FeedbackBoard from "@/components/FeedbackBoardCards/FeedbackBoard";

function filterFeedbacks(feedbacks, filterId) {
  switch (filterId) {
    case "1":
      return [...feedbacks].sort((a, b) => b.upvotes - a.upvotes);
    case "2":
      return [...feedbacks].sort((a, b) => a.upvotes - b.upvotes);
    case "3":
      return [...feedbacks].sort((a, b) => b.comments.length - a.comments.length);
    case "4":
      return [...feedbacks].sort((a, b) => a.comments.length - b.comments.length);
    default:
      return feedbacks;
  }
}

export default function Page() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("1");

  useEffect(() => {
    async function getFeedbacks() {
      try {
        const feedbackData = await fetchFeedbacks();
        setFeedbacks(filterFeedbacks(feedbackData, selectedFilter));
      } catch (error) {
        console.error("Feedbacks alınamadı:", error);
      }
    }
    getFeedbacks();
  }, [selectedFilter]);

  return (
    <div className="container">
      <div className="sidebar">
        <FeedbackBoard />
      </div>
      <div className="content">
        <FeedbackHeaderComp onFilterChange={setSelectedFilter} />
        {feedbacks.length > 0 ? (
          feedbacks.map((x) => (
            <Link key={x.id} href={`/PostDetail/${x.id}`}>
              <FeedbackCard feedback={x.feedback} />
            </Link>
          ))
        ) : (
          <EmptyPage />
        )}
      </div>
    </div>
  );
}