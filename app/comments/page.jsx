import AddComment from "@/components/addComments/addComments";
import Comments from "@/components/comments/Comments";
import "./comment.css"

export default function CommentArea(){
  return(
    <>
    <div className="commentContainer">
      <Comments/>
      <AddComment/>
    </div>
    </>
  )
}