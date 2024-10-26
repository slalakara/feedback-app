import Likes from "@/components/svgs/likes"
import "@/components/FeedbackCard/like-btn/like-btn.css"

export default function LikeBtn() {
  return(
    <div className="LikeBtn">
      <button className="like-btn">
        <Likes /> <span>112</span>
      </button>
    </div>
  )
}