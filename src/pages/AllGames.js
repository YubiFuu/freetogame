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
              <div className="choice">
                <input type="checkbox" name="all" id="all" />
                <label htmlFor="all">All Platforms</label>
              </div>
              <div className="choice">
                <input type="checkbox" name="windwos" id="windwos" />
                <label htmlFor="windwos">Windwos (pc)</label>
              </div>
              <div className="choice">
                <input type="checkbox" name="browser" id="browser" />
                <label htmlFor="browser">Browser (Web)</label>
              </div>
            </div>
          </div>
          <div class="dropdown">
            <div class="dropbtn">
              <h2>Genre/Tag</h2>
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
              <div className="choice">
                <input type="checkbox" name="mmoprg" id="mmoprg" />
                <label htmlFor="mmoprg">MMOPRG</label>
              </div>
              <div className="choice">
                <input type="checkbox" name="schooter" id="schooter" />
                <label htmlFor="schooter">Schooter</label>
              </div>
              <div className="choice">
                <input type="checkbox" name="strategy" id="strategy" />
                <label htmlFor="strategy">Strategy</label>
              </div>
              <div className="choice">
                <input type="checkbox" name="moba" id="moba" />
                <label htmlFor="moba">Moba</label>
              </div>
            </div>
          </div>
          <div class="dropdown">
            <div class="dropbtn">
              <h2>Sort by</h2>
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
              <div className="choice">
                <input type="checkbox" name="all" id="all" />
                <label htmlFor="all">Relevance</label>
              </div>
              <div className="choice">
                <input type="checkbox" name="all" id="all" />
                <label htmlFor="all">Popularity</label>
              </div>
              <div className="choice">
                <input type="checkbox" name="all" id="all" />
                <label htmlFor="all">Release Date</label>
              </div>
              <div className="choice">
                <input type="checkbox" name="all" id="all" />
                <label htmlFor="all">Alphabetical</label>
              </div>
            </div>
          </div>
        </div>
        <div className="grid"></div>
      </main>
    </>
  );
};

export default AllGames;
