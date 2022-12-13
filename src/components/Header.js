import "./Header.css";
import { useState } from "react";
const Header = () => {
  const [game, setGame] = useState("");

  const readSearch = () => {
    setGame(document.querySelector(".input-search").value);
  };
  console.log(game);

  return (
    <>
      <div className="header" action="">
        <img id="logo" className="logo" src="./images/Logo1.svg" alt="" />
        <div className="recht">
          <button onClick={readSearch} className="button-search">
            <img className="search-logo" src="./images/Search.svg" alt="" />
          </button>
          <input
            type="text"
            className="input-search"
            placeholder="Type to Search..."
          />
        </div>
      </div>
    </>
  );
};

export default Header;
