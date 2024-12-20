import Sidebar from "./sidebar/Sidebar";
import SidebarHome from "./sidebar/sidebarHome";
import categories from "@/components/data/categories.json";
import FilterBox from "./filter-box/filter-box";
import RoadmapBox from "./roadmap-box/roadmap-box";
import "@/components/FeedbackBoardCards/feedback-board.css"
import BoardBoxHeader from "./boardbox-header/box-header";

export default function FeedbackBoard() {
  return(
    <div>
      <div className="FeedbackBoardHeaderMobile">
        <BoardBoxHeader />
        <SidebarHome categories={categories.name} />
      </div>

      <div className="FeedbackBoardHeaderTablet">
        <BoardBoxHeader />
        <FilterBox />
        <RoadmapBox />
      </div>
    </div>
  )
}