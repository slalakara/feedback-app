import AddFeedbackBtn from "@/components/FeedbackHeader/addFeedbackBtn";
import FeedbackHeader from "@/components/FeedbackHeader/feedbackHeader";
import HeaderFilter from "@/components/FeedbackHeader/headerFilter";
import "./sude.css"
import NewPage from "@/components/new/page";
export default function deneme() {
  return (
    <>
      <div className="deniyorum">
        <FeedbackHeader />
        <HeaderFilter />
        <NewPage/>
        <AddFeedbackBtn />

      </div>

    </>
  )
}