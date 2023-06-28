import React from "react";

const Quote = ({ quote }) => {

  return (
    <div className="quote-container">
      <p>
      {quote}
      </p>
    </div>
  )
};

export default Quote;