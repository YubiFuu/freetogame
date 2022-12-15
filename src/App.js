import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import AppContext from "./components/AppContext";
import GameDetails from "./components/GameDetails";
import AllGames from "./pages/AllGames";
import Home from "./pages/Home";
import RecentlyAdded from "./pages/RecentlyAdded";
import SideBar from "./components/SideBar";
import Header1 from "./components/Header1";

function App() {
    const [nameContext, setNameContext] = useState("");
    return (
        <AppContext.Provider value={{ nameContext, setNameContext }}>
            <div className="App">
                <BrowserRouter>
                    <SideBar />
                    <Header1 />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/games" element={<AllGames />}></Route>
                        <Route
                            path="/recentgames"
                            element={<RecentlyAdded />}
                        ></Route>
                        <Route
                            path="/games/:id"
                            element={<GameDetails />}
                        ></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </AppContext.Provider>
    );
}

export default App;
