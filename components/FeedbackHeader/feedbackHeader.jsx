import Idea from "../svgs/idea"
import "./feedbackHeader.css"
export default function FeedbackHeader() {
  return (
    <>
      <div className="suggestionCount">
        <Idea />
        <p><span>8</span> Suggestion</p>
      </div>
    </>
  )
}