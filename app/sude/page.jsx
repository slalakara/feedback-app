import AddFeedbackBtn from "@/components/FeedbackHeader/addFeedbackBtn";
import FeedbackHeader from "@/components/FeedbackHeader/feedbackHeader";
import HeaderFilter from "@/components/FeedbackHeader/headerFilter";
import "./sude.css"
import NewPage from "@/components/new/page";
import EditModal from "@/components/EditFeedbackComp/page";
export default function deneme() {
  return (
    <>
      <div className="deniyorum">
        <FeedbackHeader />
        <HeaderFilter />
        <EditModal/>
        <AddFeedbackBtn />

      </div>

    </>
  )
}