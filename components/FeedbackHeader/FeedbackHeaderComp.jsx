import AddFeedbackBtn from "@/components/FeedbackHeader/addFeedbackBtn";
import FeedbackHeader from "@/components/FeedbackHeader/feedbackHeader";
import HeaderFilter from "@/components/FeedbackHeader/headerFilter";
import "./FeedbackHeader.css"
export default function FeedbackHeaderComp() {
  return (
    <div className="Header">
      <FeedbackHeader />
      <HeaderFilter />
      <AddFeedbackBtn />
    </div>
  )
}