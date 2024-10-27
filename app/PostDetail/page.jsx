import SidebarHome from "@/components/FeedbackBoardCards/sidebar/SidebarHome";
import FeedbackCard from "@/components/FeedbackCard";
import styles from "@/app/PostDetail/PostDetail.css";
import FeedbackHeaderComp from "@/components/FeedbackHeader/FeedbackHeaderComp";

export default function Page() {
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