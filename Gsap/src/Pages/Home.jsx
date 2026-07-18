import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './Home.css'
import { Link } from 'react-router-dom'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import About from './About'
import Videos from "./Videos";

const Home = () => {

  useGSAP(() => {
  const tl = gsap.timeline();

  gsap.to(".Power p", {
  xPercent: -50,
  duration: 3.5,
  ease: "none",
  repeat: -1,
});

tl.from(".Details", {
  y:-100,
  opacity:0,
  duration:1,
  delay:3.5,
  ease:"power1.out"
})

tl.from(".Details p", {
  y:-100,
  opacity:0,
  duration:0.6,
  delay:0.2,
  ease:"power1.out"
})

tl.from("h1", {
  y:-100,
  opacity:0,
  duration:0.6,
  delay:0.2,
  ease:"power1.out"
})

tl.from(".p", {
  y:-100,
  opacity:0,
  duration:0.6,
  delay:0.2,
  ease:"power1.out"
})

tl.from(".View", {
  y:-100,
  opacity:0,
  duration:0.6,
  delay:0.2,
  ease:"power1.out"
})

tl.from(".Members", {
  y:-100,
  opacity:0,
  duration:0.6,
  delay:0.2,
  ease:"power1.out"
})

})

  return (
    <div className="Main">
      <div className="Body">
      <div className="Details">
        <p>Strength · Conditioning · Discipline</p>
        </div>
        <h1>Forge your <br /> strongest <br /> self</h1>
        <p className="p">
          No shortcuts. No excuses. Just world-class coaching, elite <br /> equipment,
          and a community built to push you past your limits.
        </p>
        <div className="View">
          <button>
            <Link to="/trainer">Start Training <FontAwesomeIcon icon={faArrowRight} /></Link>
          </button>
          <button>
           <Link to="/videos"> View Videos <FontAwesomeIcon icon={faArrowRight} /></Link>
          </button>
        </div>
        <div className="Members">
          <div>
            <p style={{textAlign:"center", marginBottom:"10px"}}>15K+</p>
            <p>Members</p>
          </div>

          <div>
            <p style={{textAlign:"center", marginBottom:"10px"}}>40+</p>
            <p>Weekly Classes</p>
          </div>

          <div>
            <p style={{textAlign:"center", marginBottom:"10px"}}>25+</p>
            <p>Elite Coaches</p>
          </div>
      </div>
      </div>
    <div className="Power">
        <p>
          <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span> <span style={{marginLeft:"15px", fontSize:"25px"}}> Power </span> <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span> <span style={{marginLeft:"15px", fontSize:"25px"}}> Discipline </span> <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span> 
          <span style={{marginLeft:"15px",  fontSize:"25px"}}> Hustle </span>
          <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span>
          <span style={{marginLeft:"15px", fontSize:"25px"}}> Recovery </span> 
          <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span>
          <span style={{marginLeft:"15px", fontSize:"25px"}}> Mindset </span> 
          <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span> 
          <span style={{marginLeft:"15px", fontSize:"25px"}}> Strength </span> 
          <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span> 
          <span style={{marginLeft:"15px",  fontSize:"25px"}}> Endurance </span>
          <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span> <span style={{marginLeft:"15px", fontSize:"25px"}}> Power </span> <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span> <span style={{marginLeft:"15px", fontSize:"25px"}}> Discipline </span> <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span> 
          <span style={{marginLeft:"15px",  fontSize:"25px"}}> Hustle </span>
          <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span>
          <span style={{marginLeft:"15px", fontSize:"25px"}}> Recovery </span> 
          <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span>
          <span style={{marginLeft:"15px", fontSize:"25px"}}> Mindset </span> 
          <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span> 
          <span style={{marginLeft:"15px", fontSize:"25px"}}> Strength </span> 
          <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span> 
          <span style={{marginLeft:"15px",  fontSize:"25px"}}> Endurance </span>
        </p>
      </div>
      <About/>
            <div className="Power">
        <p>
          <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span> <span style={{marginLeft:"15px", fontSize:"25px"}}> Power </span> <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span> <span style={{marginLeft:"15px", fontSize:"25px"}}> Discipline </span> <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span> 
          <span style={{marginLeft:"15px",  fontSize:"25px"}}> Hustle </span>
          <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span>
          <span style={{marginLeft:"15px", fontSize:"25px"}}> Recovery </span> 
          <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span>
          <span style={{marginLeft:"15px", fontSize:"25px"}}> Mindset </span> 
          <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span> 
          <span style={{marginLeft:"15px", fontSize:"25px"}}> Strength </span> 
          <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span> 
          <span style={{marginLeft:"15px",  fontSize:"25px"}}> Endurance </span>
          <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span> <span style={{marginLeft:"15px", fontSize:"25px"}}> Power </span> <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span> <span style={{marginLeft:"15px", fontSize:"25px"}}> Discipline </span> <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span> 
          <span style={{marginLeft:"15px",  fontSize:"25px"}}> Hustle </span>
          <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span>
          <span style={{marginLeft:"15px", fontSize:"25px"}}> Recovery </span> 
          <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span>
          <span style={{marginLeft:"15px", fontSize:"25px"}}> Mindset </span> 
          <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span> 
          <span style={{marginLeft:"15px", fontSize:"25px"}}> Strength </span> 
          <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span> 
          <span style={{marginLeft:"15px",  fontSize:"25px"}}> Endurance </span>
        </p>
      </div>
      <Videos/>
    </div>
  );
};

export default Home;
