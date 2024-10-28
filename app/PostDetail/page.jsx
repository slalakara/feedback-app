import SidebarHome from "@/components/FeedbackBoardCards/sidebar/SidebarHome";
import FeedbackCard from "@/components/FeedbackCard";
import styles from "@/app/PostDetail/PostDetail.css";
import FeedbackHeaderComp from "@/components/FeedbackHeader/FeedbackHeaderComp";

export const metadata = {
  title: {
    absolute: "Feedback"
  }
}

export default function Page({searchParams}) {
  let url = `${process.env.API_ROOT_URL}${process.env.API_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}`
  if(searchParams?.category){
    url = `${url}?category=${category}`
  }

  console.log(url);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SidebarHome />
      </div>

      <main className={styles.content}>
        <FeedbackHeaderComp />
        <FeedbackCard />
      </main>
    </div>
  );
}