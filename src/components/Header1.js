import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Header1.css";

const Header1 = () => {
    const [searching, setSearching] = useState([]);
    const [saveInput, setSaveInput] = useState("");
    const [messageOutput, setMessageOutput] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://www.freetogame.com/api/games?sort-by=popularity")
            .then((res) => res.json())
            .then((json) => setSearching(json));
    }, []);
    function handleKeyDown(elt) {
        if (elt.key === "Enter") {
            setSaveInput(elt.target.value);
            rettemich();
        }
    }
    function rettemich() {
        if (saveInput.length > 2) {
            for (let i = 0; i < searching.length; i++) {
                if (searching[i].title.includes(saveInput)) {
                    return fetch(
                        `https://www.freetogame.com/api/games?sort-by=popularity`
                    )
                        .then((res) => res.json())
                        .then((data) => {
                            //console.log(data[i]);
                            // let result = Object.keys(data[i]).map(
                            //     (key) => (String(key), data[i][key])
                            // );
                            // console.log(result);
                            navigate(`/games/${data[i].id}`);
                        });
                }
            }

            setMessageOutput("searchrequest not found.. try again!");
        }
    }

    // function searchId() {
    //     searching.forEach((e) => {
    //         if (e.name.includes(saveInput)) {
    //             return setSearchingId(e.id);
    //         }
    //     });
    // }

    // function searchFunction() {
    //     handleKeyDown();
    //     searchId();
    //     navigate(`/games/${searchingId}`);
    // }
    // console.log(saveInput);

    return (
        <div className="header">
            <Link to="/">
                <img src="./images/Logo1.svg" alt="" />
            </Link>
            <div>
                <div className="search-bar">
                    <input
                        type="text"
                        id="saveInput"
                        name="saveInput"
                        onKeyDown={handleKeyDown}
                        placeholder="Type to Search..."
                    />
                    <img src="./images/Search.svg" alt="" />
                </div>
                {messageOutput.length > 1 ? <p>{messageOutput}</p> : null}
            </div>
        </div>
    );
};

export default Header1;
