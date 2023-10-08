// IMPORT LIBRARIES
import React from "react";

// IMPORT IMAGES
import ucsdLogo from'../../assets/images/ucsd-logo.png';

// IMPORT COMPONENTS
import ResumeLink from "../../components/resumeLink";

const Ucsd = () => {
  return (
    <li className="resume-item active">
        <div className="title">
            <ResumeLink 
                name="UNIVERSITY OF CALIFORNIA - SAN DIEGO" 
                url="https://ucsd.edu/" 
            />
        </div>

        <div className="sub-title">M.S. IN{" "}
            <ResumeLink 
                name="MECHANICAL ENGINEERING" 
                url="https://mae.ucsd.edu/" 
            />
            {" "}(FOCUS ON ROBOTICS)
        </div>

        <div className="sub-sub-title">September 2022 - Current</div>

        <img 
        src={ucsdLogo} 
        className="resume-logo ucsd-logo"
        alt=""
        ></img>

        <div className="content">
            <p><b>CGPA</b>: 3.88/4.0</p>
            <p>• Graduate Student Researcher in {" "} 
                <ResumeLink 
                    name="Center for Energy Research (CER)" 
                    url="https://cer.ucsd.edu/" 
                    bold={true}
                />{" "}- Full Tuition Waiver and{" "} 
                <ResumeLink 
                    name="Existential Robotics Laboratory" 
                    url="https://existentialrobotics.org/" 
                    bold={true}
                />
            </p>
        </div>
                    
        <div className="pointer"></div>
    </li>
    );
}

export default Ucsd;