import AddComment from "@/components/addComments/addComments";
import Comments from "@/components/comments/Comments";
import "./comment.css"
import FeedbackCard from "@/components/FeedbackCard";
import GoBack from "@/components/GoBack/gobackBtn";
import EditFeedbackBtn from "@/components/EditFeedbackBtn/editfeedbackBtn";

export default function CommentArea() {
  return (
    <div className="feedbackDetailContainer">
      <div className="detailcompHeader">
        <GoBack/>
        <EditFeedbackBtn/>
      </div>
      <FeedbackCard />
      <div className="commentContainer">

        <Comments />
        <AddComment />
      </div>
    </div>
  )
}