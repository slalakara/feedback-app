import "./feedbackHeader.css";

export default function AddFeedbackBtn({ onClick }) {
  return (
    <div className="addfeedback">
      <button onClick={onClick}>+ Add Feedback</button>
    </div>
  );
}
