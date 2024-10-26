import LeftArrow from "../svgs/leftArrow";
import "./gobackBtn.css";

export default function GoBack({ onGoBack }) {
  return (
    <button className="back-button" onClick={onGoBack}>
      <LeftArrow />
      <h4>Go back</h4>
    </button>
  );
}
