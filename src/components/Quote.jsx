import React from "react";

const Quote = ({ quote }) => {
  const handleRefresh = () => {
    
  }
  return (
    <div className="quote-container">
      <p>
      {quote}
      </p>
      <button className="refresh-btn" onClick={handleRefresh}>
        <i class="fa-solid fa-arrows-rotate"></i>
      </button>
    </div>
  )
};

export default Quote;