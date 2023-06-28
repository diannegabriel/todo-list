import React from "react";

const Error = ({ error, inputText, setError }) => {

  return (
    <div className="error-container">
      {error&&inputText.length === 0?
        <label>Please add a thing to do</label>:""
      }
    </div>
  )
};

export default Error;