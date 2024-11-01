import Elijah from "../imgs/elijah.png"; 
import ReplyButton from "./replyBtn"; 

export default function Comments({ comments = [] }) {
  if (comments.length === 0) {
    return <p>Yorum yok.</p>; 
  }

  return (
    <div className="commentsContainer">
      <div className="commentsGeneral">
        <h3>{comments.length} Yorum</h3>
        {comments.map((comment, index) => (
          <div className="commentsCard" key={index}>
            <img src={Elijah} alt="Elijah" />
            <div className="content">
              <div className="userInformation">
                <div>
                  <h4>{comment.name || "Name"}</h4>
                  <p>@{comment.username || "Username"}</p>
                </div>
                <ReplyButton />
              </div>
              <p>{comment.content || comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
