// IMPORT LIBRARIES
import React from "react";

const ResumeLink = ({ name, url, bold }) => {
  return (
    <a
      href={url}
      target="_blank" 
      rel="noopener noreferrer"
      className="resume-links"
    >
      {bold ?
      <b>{name}</b>
      :
      name}
    </a>
  );
}

export default ResumeLink;