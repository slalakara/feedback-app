import "./feedbackHeader.css";

export default function AddFeedbackBtn({ onAddFeedbackClick }) {
  return (
    <div className="addfeedback">
      <button onClick={onAddFeedbackClick}>+ Add Feedback</button>
    </div>
  );
}
