import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="Body">
      <div className="Details">
        <p>Strength · Conditioning · Discipline</p>
        </div>
        <h1>Forge your <br /> strongest <br /> self</h1>
        <p>
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

      <div className="Power">
        <p>
          <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span> <span style={{marginLeft:"15px", fontSize:"25px"}}> Power </span> <span style={{marginLeft:"15px", color:"gray", fontSize:"25px"}}> ✦ </span> Discipline  ✦ Hustle ✦ Recovery ✦ Mindset ✦ Strength ✦ Endurance
        </p>
      </div>
    </div>
  );
};

export default Home;
