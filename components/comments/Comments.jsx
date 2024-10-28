import Elijah from "../imgs/elijah.png"; 
import ReplyButton from "./replyBtn"; 

export default function Comments({ comments }) {
  return ( 
    <div className="commentsContainer"> 
      <div className="commentsGeneral"> 
        <h3>{comments.length} Comments</h3> 

        {comments.map((comment, index) => ( 
          <div className="commentsCard" key={index}> 
            <img src={Elijah} alt="Elijah" /> 
            <div className="content"> 
              <div className="userInformation"> 
                <div> 
                  <h4>Name</h4> 
                  <p>@Username</p> 
                </div> 
                <ReplyButton /> 
              </div> 
              <p>{comment}</p> 
            </div> 
          </div> 
        ))} 
      </div> 
    </div> 
  ); 
}
