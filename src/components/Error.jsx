import React from "react";

const Error = ({ error, inputText }) => {

  return (
    <div className="error-container">
      {error&&inputText.length === 0 ? <label>Please add a thing to do!</label>
        : inputText.length >= 100 ? <label>Task must be 100 characters or less.</label>
        :""
      }
    </div>
  )
};

export default Error;