import React from "react";

const Footer = () => {
  return (
    <footer>
      <h1 className="project-name">MotivaDid</h1>
      <h2>A todo list app with a slight encouragement!</h2>
      <div className="credits">
        <p>
          Built with: JavaScript, React.js, HTML, CSS, SASS, SVG, Motivation
          API, Local storage
        </p>
        <p>
          Made by:
          <a href="https://github.com/diannegabriel/todo-list" target="_blank">{" "}
            Dianne
          </a>
        </p>
        <p>Ver. 2</p>
      </div>
    </footer>
  );
};

export default Footer;
