// IMPORT LIBRARIES
import React from "react";

// IMPORT STYLES
import "../styles/resume.css";

// IMPORT IMAGES
import iiitdmLogo from'../assets/images/iiitdm-logo.png';
import sgLogo from'../assets/images/sg-logo.png';
import tuklLogo from'../assets/images/tukl-logo.png';

// IMPORT CONTAINERS
import ResumeIcons from "../containers/resume/icons";
import Ucsd from "../containers/resume/ucsd";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="download-section">
        <a                 
          href="/Surya_Prakash_Resume.pdf#zoom=120"
          className="resume-download"
        >
          Download Resume
        </a>
      </div> 

      <div className="icons-section">
        <ResumeIcons />
      </div>

      <div className="timeline-section resume-education">
        <div className="heading-section">
          <div className="heading">EDUCATION</div>
        </div>

        <div className="timeline-container">
          <ul className="vertical-scrollable-timeline" id="vertical-scrollable-timeline">
            <div className="list-progress">
              <div className="inner">
              </div>
            </div>

            <Ucsd />

            <li className="resume-item">
              <div className="title">
                <a
                  href="https://www.iiitdm.ac.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  INDIAN INSTITUTE OF INFORMATION TECHNOLOGY DESIGN & MANUFACTURING
                </a>
              </div>

              <div className="sub-title">B.Tech. IN{" "}
                <a
                  href="http://mech.iiitdm.ac.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  MECHANICAL ENGINEERING
                </a>
              </div>

              <div className="sub-sub-title">July 2015 - July 2019</div>

              <img 
                src={iiitdmLogo} 
                className="resume-logo iiitdm-logo"
                alt=""
              ></img>
              <div className="content">
                <p><b>CGPA</b>: 9.5/10.0</p>
                <p>• Gold Medalist - Batch of 2019</p>
              </div>
              <div className="pointer"></div>
            </li>
          </ul>
        </div>
      </div>

      <div className="timeline-section resume-experience">
        <div className="heading-section">
          <div className="heading">EXPERIENCE</div>
        </div>

        <div className="timeline-container">
          <ul className="vertical-scrollable-timeline" id="vertical-scrollable-timeline">
            <div className="list-progress">
              <div className="inner">
              </div>
            </div>

            <li className="resume-item">
              <div className="title">
                <a
                  href="https://in.saint-gobain-glass.com/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  SAINT-GOBAIN INDIA PRIVATE LIMITED
                </a>
              </div>

              <div className="sub-title">
                Software Engineer - Digital Manufacturing Team · Full Time
              </div>

              <div className="sub-sub-title">July 2019 - November 2021</div>
              <div className="sub-sub-title">Chennai, Tamil Nadu, India</div>

              <img 
                src={sgLogo} 
                className="resume-logo sg-logo"
                alt=""
              ></img>
              <div className="content">
                <p><b>Skills</b>: SQL · Python (Programming Language) · Computer Vision · Warehouse Management Systems</p>
                <p>• Designed algorithm in R for vibration monitoring of furnace side wall blowers with 90% accurate fault detection.</p>
                <p>• Spearheaded a team of 4 C# developers to build Warehouse Management System to optimize warehouse space resulting in 60% rise in Material Handling Equipment utility and 100% Working Order tracking.</p>
                <p>• Designed and implemented algorithms using Python for optimizing truck space and forklift travel in the warehouse, saving 250 man-hours per month and 20% of truck space.</p>
                <p>• Automated silica sand accounting process by deriving consumption quantity from Siemens PLC register data.</p>
              </div>
              <div className="pointer"></div>
            </li>

            <li className="resume-item">
              <div className="sub-title">
              Software Engineer - Digital Manufacturing Team  · Internship
              </div>

              <div className="sub-sub-title">August 2018 - October 2018</div>

              <div className="content">
                <p><b>Skills</b>: Image Processing · OpenCV · Android Studio</p>
                <p>• Developed a computer vision algorithm in Python to detect over packing of gypsum boards with 98% accuracy.</p>
                <p>• Delivered an end to end solution by packaging it into an Android mobile application.</p>
              </div>
              <div className="pointer"></div>
            </li>

            <li className="resume-item">
              <div className="title">
                <a
                  href="https://rptu.de/en/home/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  UNIVERSITY OF KAISERSLAUTERN (TU-KL) 
                </a>
              </div>

              <div className="sub-title">
                Undergraduate Research Assistant · Internship
              </div>

              <div className="sub-sub-title">May 2018 - July 2018</div>
              <div className="sub-sub-title">Kaiserslautern, Rhineland-Palatinate, Germany</div>

              <img 
                src={tuklLogo} 
                className="resume-logo tukl-logo"
                alt=""
              ></img>
              <div className="content">
                <p><b>Skills</b>: Image Processing · Digital Image Processing</p>
                <p>• Investigated on new methods to build a low-cost computer aided methodology to determine the c-axis orientation of optically anisotropic materials.</p>
                <p>• Enhanced and tested MATLAB image processing algorithm which uses Polarized Light Microscopy micrographs to determine c-axis orientation of alpha commercially pure titanium alloy.</p>
                <p>• Resulted in 92% match with the c-axis orientation data obtained from Electron Backscatter Diffraction test.</p>
              </div>
              <div className="pointer"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
