import FilterBox from "@/components/FeedbackBoardCards/filter-box/filter-box";
import RoadmapBox from "@/components/FeedbackBoardCards/roadmap-box/roadmap-box";
import Sidebar from "@/components/FeedbackBoardCards/sidebar/Sidebar";
import SidebarHome from "@/components/FeedbackBoardCards/sidebar/sidebarHome";

export default function Deneme() {
  return(
    <div>
      {/* <SidebarHome /> */}
      <RoadmapBox />
      <FilterBox />
    </div>
  )
}