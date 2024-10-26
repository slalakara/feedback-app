import SidebarHome from "@/components/FeedbackBoardCards/sidebar/SidebarHome";
import FeedbackCard from "@/components/FeedbackCard";
import styles from "@/app/sila/sila.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SidebarHome />
      </div>

      <main className={styles.content}>
        <FeedbackCard />
      </main>
    </div>
  );
}