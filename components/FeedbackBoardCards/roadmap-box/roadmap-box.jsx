import "@/components/FeedbackBoardCards/roadmap-box/roadmap.css"
export default function RoadmapBox() {
  return(
    <div className="RoadmapBox">
      <div className="roadmap-box-header">
        <h3>Roadmap</h3>
        <a href="#">View</a>
      </div>
      <ul className="status">
        <li><div className=""><span className="planned">•</span>   Planned</div> <span>2</span></li>
        <li><div className=""><span className="progress">•</span>   In-Progress</div> <span>2</span></li>
        <li><div className=""><span className="live">•</span>   Live</div> <span>2</span></li>
      </ul>
    </div>
  )
}