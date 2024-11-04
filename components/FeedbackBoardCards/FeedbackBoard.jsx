import Sidebar from "./sidebar/Sidebar";
import SidebarHome from "./sidebar/sidebarHome";
// import categories from "@/data/categories.json";
import FilterBox from "./filter-box/filter-box";
import RoadmapBox from "./roadmap-box/roadmap-box";
import "@/components/FeedbackBoardCards/feedback-board.css"
import BoardBoxHeader from "./boardbox-header/box-header";

export default function FeedbackBoard() {
  return(
    <div>
      <div className="FeedbackBoardHeaderMobile">
        <BoardBoxHeader />
        <SidebarHome />
      </div>

      <div className="FeedbackBoardHeaderTablet">
        <BoardBoxHeader />
        <FilterBox />
        <RoadmapBox />
      </div>
    </div>
  )
}