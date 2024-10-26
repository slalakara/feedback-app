import AddFeedbackBtn from "@/components/FeedbackHeader/addFeedbackBtn";
import FeedbackHeader from "@/components/FeedbackHeader/feedbackHeader";
import HeaderFilter from "@/components/FeedbackHeader/headerFilter";
import "./sude.css"
export default function deneme() {
  return (
    <>
      <div className="deniyorum">

        <FeedbackHeader />
        <HeaderFilter />
        <AddFeedbackBtn />
      </div>

    </>
  )
}