// IMPORT LIBRARIES
import React from "react";

// IMPORT STYLES
import "../styles/home.css";

// IMPORT IMAGES
import suryaImage from'../assets/images/surya.jpg';

// IMPORT CONTAINERS
import HomeIcons from "../containers/home/icons";

const Home = () => {
  return (
    <div className="home-container">
      <img 
        src={suryaImage} 
        className="home-img"
        alt=""
      ></img>

      <div className="home-intro">
        <p className="home-name">Hi there! I am Surya Prakash.</p>
        <p className="home-university">GRADUATE STUDENT @ UC SAN DIEGO</p>
        <p className="home-address">La Jolla, California</p>
      </div>

      <div className="home-icons-wrapper">
        <HomeIcons />
      </div>
    </div>
  );
}

export default Home;
