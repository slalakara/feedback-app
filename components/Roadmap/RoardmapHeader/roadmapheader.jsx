import AddFeedbackBtn from "@/components/FeedbackHeader/addFeedbackBtn";
import GoBack from "@/components/GoBack/gobackBtn";
import "@/components/Roadmap/RoardmapHeader/roadmapheader.css"

export default function RoadmapHeader() {
  return(
    <div className="RoadmapHeader">
      <div className="roadmapheadergoback">
        <GoBack />
        <h4>Roadmap</h4>
      </div>
      <AddFeedbackBtn />
    </div>
  )
}