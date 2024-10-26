import LeftArrow from "../svgs/leftArrow";
import "./goBack.css";

export default function GoBack() {
  return (
    <button className="back-button">
      <LeftArrow />
      <h4>Go back</h4>
    </button>
  )
}