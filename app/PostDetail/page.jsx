
import { fetchFeedbacks } from "@/utils/func";
import SidebarHome from "@/components/FeedbackBoardCards/sidebar/SidebarHome";
import FeedbackCard from "@/components/FeedbackCard";
import FeedbackHeaderComp from "@/components/FeedbackHeader/FeedbackHeaderComp";
import CommentArea from "../comments/page"; // Yorum alanını içe aktar
import styles from "@/app/PostDetail/PostDetail.css";


export default async function Page({ searchParams }) {
  let feedbacks = [];

  try {
    feedbacks = await fetchFeedbacks(searchParams?.category);
  } catch (error) {
    console.error("Feedbacks alınamadı:", error);
  }

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SidebarHome />
      </div>
      <main className={styles.content}>
        <FeedbackHeaderComp />
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback) => (
            <FeedbackCard key={feedback.id} feedback={feedback} />
          ))
        ) : (
          <p>Hiç geri bildirim yok.</p>
        )}
      </main>
    </div>
  );
}
