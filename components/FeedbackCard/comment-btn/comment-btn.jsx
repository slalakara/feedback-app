import Comments from "@/components/svgs/comments"

export default function CommentsBtn() {
  return(
    <div className="comments-btn">
      <button className="comments-btn">
        <Comments /> <span>2</span>
      </button>
    </div>
  )
}