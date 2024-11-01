"use client"
import AddFeedbackBtn from "@/components/FeedbackHeader/addFeedbackBtn";
import GoBack from "@/components/GoBack/gobackBtn";
import "@/components/Roadmap/RoardmapHeader/roadmapheader.css"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RoadmapHeader() {
  const [isModalOpen, setModalOpen] = useState(false); 
  const router = useRouter(); 

  const handleHomeBack = () => { 
    setModalOpen(false); 
    router.push('/'); 
  };

  return(
    <div className="RoadmapHeader">
      <div className="roadmapheadergoback">
      <GoBack onGoBack={handleHomeBack} /> 
        <h4>Roadmap</h4>
      </div>
      <AddFeedbackBtn />
    </div>
  )
}