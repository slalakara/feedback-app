import "@/components/FeedbackBoardCards/roadmap-box/roadmap.css"
import Link from "next/link"

export default function RoadmapBox() {
  return(
    <div className="RoadmapBox">
      <div className="roadmap-box-header">
        <h3>Roadmap</h3>
        <Link href={'/Roadmap'}>View</Link>
      </div>
      <ul className="status">
        <li><div className=""><span className="planned">•</span>   Planned</div> <span>2</span></li>
        <li><div className=""><span className="progress">•</span>   In-Progress</div> <span>2</span></li>
        <li><div className=""><span className="live">•</span>   Live</div> <span>2</span></li>
      </ul>
    </div>
  )
}