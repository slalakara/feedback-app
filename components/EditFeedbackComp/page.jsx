import "./edit.css"
import Edit from "../svgs/edit"
import GoBack from "../GoBack/gobackBtn"
export default function EditModal() {
  return (
    <div className="editmodalContainer">
      <GoBack />
      <div className="editModal">
        <div className="editsvg">
          <Edit />
        </div>
        <h1>Editing ‘Add a dark theme option’</h1>
        <div className="editHero">
          {/* Item Start */}
          <div className="heroItem">
            <h3>Feedback Title</h3>
            <p>Add a short, descriptive headline</p>
            <input type="text" placeholder="Please add a dark theme option" />
          </div>
          {/* Item End */}

          {/* Item Start */}
          <div className="heroItem">
            <h3>Category</h3>
            <p>Choose a category for your feedback</p>
            <select>
              <option value="feature">Feature</option>
              <option value="bug">Bug</option>
              <option value="enhancement">Enhancement</option>
            </select>
          </div>
          {/* Item End */}

          {/* Item Start */}
          <div className="heroItem">
            <h3>Update Status</h3>
            <p>Change feedback state</p>
            <select>
              <option value="planned">Planned</option>
              <option value="in-progress">In Progress</option>
              <option value="live">Live</option>
            </select>
          </div>
          {/* Item End */}

          {/* Item Start */}
          <div className="heroItem">
            <h3>Feedback Detail</h3>
            <p>Include any specific comments on what should be improved, added, etc.</p>
            <textarea placeholder="It would help people with light sensitivities and who prefer dark mode."></textarea>
          </div>
          {/* Item End */}

          <div className="buttons">
            <button className="delete">Delete</button>
            <div className="addCancel">
              <button className="cancel">Cancel</button>
              <button className="addFeedback">Add Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}