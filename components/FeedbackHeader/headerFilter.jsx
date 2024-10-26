import "./feedbackHeader.css"

export default function HeaderFilter() {
  return (
    <>
      <div className="filter-options">
        <p>
          <input
            type="checkbox" />
          Most Upvotes
        </p>
        <p>
          <input type="checkbox" />
          Least Upvotes
        </p>
        <p>
          <input type="checkbox" />
          Most Comments
        </p>
        <p>
          <input type="checkbox" />
          Least Comments
        </p>
      </div>
    </>
  )
}