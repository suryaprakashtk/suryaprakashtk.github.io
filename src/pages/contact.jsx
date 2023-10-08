// IMPORT LIBRARIES
import React from "react";

// IMPORT STYLES
import "../styles/contact.css";

// IMPORT ICONS
import LinkedinIcon from "../assets/icons/linkedin";
import GithubIcon from "../assets/icons/github";
// import InstagramIcon from "../assets/icons/instagram";

const Contact = () => {
  return (
    <div className="contact-container">

      <div className="contact-intro">
        <p className="contact-details">Feel free to get in touch. Drop me a line:</p>
        <div className="contact-emails">
          <a
              href="mailto:stk222@ucsd.edu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-email"
          >
            stk222@ucsd.edu
          </a>
          <a
              href="mailto:suryaprakash1997tk@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-email"
          >
            suryaprakash1997tk@gmail.com
          </a>
        </div>
      </div>

      <div className="contact-icons-wrapper">
        <ul>
          <li>
            <a 
              href="https://www.linkedin.com/in/suryaprakashtk" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="contact-icons linkedin"/>
            </a>
          </li>

          <li>
            <a 
              href="https://github.com/suryaprakashtk" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GithubIcon className="contact-icons github"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
