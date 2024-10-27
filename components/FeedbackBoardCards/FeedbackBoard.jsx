import Sidebar from "./sidebar/Sidebar";
import SidebarHome from "./sidebar/sidebarHome";
import categories from "@/data/categories.json";

export default function FeedbackBoard() {
  return(
    <div>
      <div className="Header">
        <h4>Frontend Mentor</h4>
        <p>Feedback Board</p>
      </div>
      <SidebarHome categories={categories.name} />
    </div>
  )
}