import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
const Header = () => {
  const [game, setGame] = useState("");

  const readSearch = (event) => {
    setGame(event.target.value);
  };
  console.log(game);

  return (
    <>
      <div className="header" action="">
        <Link className="logo-link" to="/">
          <img id="logo" className="logo" src="./images/Logo1.svg" alt="" />
        </Link>

        <div className="recht">
          <button className="button-search">
            <img className="search-logo" src="./images/Search.svg" alt="" />
          </button>
          <input
            type="text"
            className="input-search"
            placeholder="Type to Search..."
            onChange={readSearch}
            value={game}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
