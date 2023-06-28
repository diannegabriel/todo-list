import React from "react";

const Quote = ({ quote }) => {
  const handleRefresh = () => {
    console.log("refresh for a new quote!")
  }
  return (
    <div className="quote-container">
      <p>
      {quote}
      </p>
      <button className="refresh-btn" onClick={handleRefresh}>
        <i className="fas fa-redo-alt"></i>
      </button>
    </div>
  )
};

export default Quote;