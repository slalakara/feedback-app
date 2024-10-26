import Idea from "../svgs/idea"
import "./feedbackHeader.css"
export default function FeedbackHeader() {
  return (
    <>
      <div className="suggestionCount">
        <Idea />
        <p><span>6</span> Suggestion</p>
      </div>
    </>
  )
}