import "./new.css";
import AddLogo from "../svgs/add";
import GoBack from "../GoBack/gobackBtn";

export default function NewPage({ onCancel }) {
  return (
    <div className="newModalContainer">
      <div className="gobackbtn">
        <GoBack onGoBack={onCancel} />
      </div>
      <div className="newModal">
        <div className="addlogosvg">
          <AddLogo />
        </div>
        <div className="newHero">
          <h1>Create New Feedback</h1>

          <div className="feedback">
            <div className="feedbackTitle">
              <h3>Feedback Title</h3>
              <p>Add a short, descriptive headline</p>
            </div>
            <input type="text" />
          </div>

          <div className="category">
            <div className="categoryTitle">
              <h3>Category</h3>
              <p>Choose a category for your feedback</p>
            </div>
            <select>
              <option value="Feature">Feature</option>
              <option value="UI">UI</option>
              <option value="UX">UX</option>
              <option value="Enhancement">Enhancement</option>
              <option value="Bug">Bug</option>
            </select>
          </div>

          <div className="details">
            <div className="detailsTitle">
              <h3>Feedback Detail</h3>
              <p>Include any specific comments on what should be improved, added, etc.</p>
            </div>
            <textarea></textarea>
          </div>

          <div className="buttons">
            <button className="cancel" onClick={onCancel}>Cancel</button>
            <button className="addFeedback">Add Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
}
