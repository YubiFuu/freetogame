import { useState, useEffect } from "react";
import "./AllGames.css";
const AllGames = () => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch("https://www.freetogame.com/api/games")
      .then((response) => response.json())
      .then((json) => setData(json));
  };
  useEffect(fetchData, []);
  console.log(data);

  return (
    <>
      <header>
        <div
          className="image"
          style={{
            backgroundImage: `url(./images/league.png)`,
          }}
        >
          <h2>All Games</h2>
        </div>
      </header>
      <main>
        <div className="filter">
          <div class="dropdown">
            <div class="dropbtn">
              <h2>Platform</h2>
              <svg
                className="vector-down"
                width="12"
                height="17"
                viewBox="0 0 12 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L6 16L11 1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AllGames;
