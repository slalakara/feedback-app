import Comments from "@/components/svgs/comments";

export default function CommentsBtn({ commentsCount }) {
  return (
    <div className="comments-btn">
      <button>
        <Comments /> <span>{commentsCount}</span>
      </button>
    </div>
  );
}