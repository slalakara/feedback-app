import AddFeedbackBtn from "@/components/FeedbackHeader/addFeedbackBtn"
import EmptyPageImage from "@/components/svgs/empty"
import "@/components/FeedbackCard/empty/empty.css"

export default function EmptyPage() {
  return(
    <div className="EmptyPage">
      <EmptyPageImage />
      <h3>There is no feedback yet.</h3>
      <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
      <AddFeedbackBtn />
    </div>
  )
}