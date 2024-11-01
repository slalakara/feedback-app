"use client"; 
import { useState } from 'react';
import "./new.css";
import AddLogo from "../svgs/add";
import GoBack from "../GoBack/gobackBtn";
import { createFeedback } from "./actions"; 

export default function NewPage({ onCancel }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Feature");
  const [detail, setDetail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const feedbackData = {
      title,
      categoryId: getCategoryId(category), 
      detail,
      statusId: 0, 
    };

    try {
      const response = await createFeedback(feedbackData);
      console.log("Feedback başarıyla eklendi:", response);
      onCancel(); 
    } catch (error) {
      console.error("Feedback ekleme hatası:", error);
    }
  };

  const getCategoryId = (category) => {
    switch (category) {
      case "Feature":
        return 1; 
      case "UI":
        return 2; 
      case "UX":
        return 3;
      case "Enhancement":
        return 4; 
      case "Bug":
        return 5;
      default:
        return 0; 
    }
  };

  return (
    <div className="newModalOverlay">
      <div className="newModal">
        <div className="gobackbtn">
          <GoBack onGoBack={onCancel} />
        </div>
        <div className="addlogosvg">
          <AddLogo />
        </div>
        <form className="newHero" onSubmit={handleSubmit}>
          <h1>Create New Feedback</h1>

          <div className="feedback">
            <div className="feedbackTitle">
              <h3>Feedback Title</h3>
              <p>Add a short, descriptive headline</p>
            </div>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="category">
            <div className="categoryTitle">
              <h3>Category</h3>
              <p>Choose a category for your feedback</p>
            </div>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
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
            <textarea 
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            />
          </div>

          <div className="buttons">
            <button type="button" className="cancel" onClick={onCancel}>Cancel</button>
            <button type="submit" className="addFeedback">Add Feedback</button>
          </div>
        </form>
      </div>
    </div>
  );
}
