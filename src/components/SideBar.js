import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="side-bar">
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 512 512"
        height="40px"
        width="40px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
      </svg>

      <div className="iconss">
        <Link to="/">
          <img src="./images/Home.svg" alt="" />
        </Link>
        <Link to="/games">
          <img src="./images/AllGames.svg" alt="" />
        </Link>
        <Link>
          <img src="./images/RecentlyAdded.svg" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
