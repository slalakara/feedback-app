
import Comments from '@/components/comments/Comments';
import FeedbackHeaderComp from "@/components/FeedbackHeader/FeedbackHeaderComp";
import styles from "@/app/PostDetail/PostDetail.css";

export default async function FeedbackDetailPage({ params }) {
  const feedback = await fetchFeedbackDetail(params.id);

  return (
    <div className={styles.container}>
      <FeedbackHeaderComp />
      <div className={styles.feedbackDetail}>
        <h1>{feedback.title}</h1>
        <p>{feedback.description}</p>
        <button className="statusBtn">{feedback.status}</button>
        
    
        <Comments comments={feedback.comments} />
      </div>
    </div>
  );
}
