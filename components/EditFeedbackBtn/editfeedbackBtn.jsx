import "./editfeedbackBtn.css";

export default function EditFeedbackBtn({ onEditClick }) { 
  return (
    <div className="editfeedback">
      <button onClick={onEditClick}>Edit Feedback</button> 
    </div>
  );
}
