import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="Body">
      <div className="Details">
        <p className="p">Strength · Conditioning · Discipline</p>
        <h1>Forge your strongest self</h1>
        <p>
          No shortcuts. No excuses. Just world-class coaching, elite equipment,
          and a community built to push you past your limits.
        </p>
        <div className="View">
          <button>
            Start Training <FontAwesomeIcon icon={faArrowRight} />{" "}
          </button>
          <button>
            View Videos <FontAwesomeIcon icon={faArrowRight} />{" "}
          </button>
        </div>
        <div className="Members">
          <div>
            <p>15K+</p>
            <p>Members</p>
          </div>

          <div>
            <p>40+</p>
            <p>Weekly Classes</p>
          </div>

          <div>
            <p>25+</p>
            <p>Elite Coaches</p>
          </div>
        </div>
      </div>

      <div className="Power">
        <p>
          ✦ Power ✦ Discipline ✦ Hustle ✦ Recovery ✦ Mindset ✦ Strength ✦ Endurance
        </p>
      </div>
    </div>
  );
};

export default Home;
