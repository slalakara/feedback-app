"use client"; 
import "./addComments.css"; 
import { useEffect, useState } from "react"; 
import { toast } from "sonner"; 

export default function AddComment({ onCommentAdded }) {
  const [text, setText] = useState(""); 
  const MAX_CHAR = 250; 
  const [remainingChar, setRemainingChar] = useState(MAX_CHAR); 

  useEffect(() => { 
    setRemainingChar(MAX_CHAR - text.length); 

    if (remainingChar < 0) { 
      toast.error("250 karakterden fazla olamaz"); 
    } 
  }, [text]); 

  const handleSubmit = (e) => { 
    e.preventDefault();
    if (text.length > 0 && remainingChar >= 0) { 
      onCommentAdded(text); 
      setText(""); 
    } 
  }; 

  return ( 
    <div className="addCommentContainer"> 
      <h4>Add Comment</h4> 
      <form onSubmit={handleSubmit}> 
        <textarea 
          onChange={(e) => setText(e.target.value)} 
          value={text} 
          placeholder="type your comment here" 
        ></textarea> 
        <div className="commentFooter"> 
          <span>{remainingChar} Characters left</span> 
          <button className="postcommentbtn" disabled={remainingChar < 0}>Post Comment</button> 
        </div> 
      </form> 
    </div> 
  ); 
}
