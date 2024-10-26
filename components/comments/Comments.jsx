import Elijah from "../imgs/elijah.png"; 
import ReplyButton from "./replyBtn";

export default function Comments() {
  return (
    <>
      <div className="commentsContainer">
        <div className="commentsGeneral">
          <h3>4 Comments</h3>

          <div className="commentsCard">
            <img src={Elijah} alt="Elijah" />
            <div className="content">
              <div className="userInformation">
                <div>
                  <h4>Name</h4>
                  <p>@Username</p>
                </div>
                <ReplyButton />
              </div>

              <p>
              Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
