import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Landing from "./containers/Landing/Landing";
import Trending from "./containers/Trending/Trending";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Nav />
                <Landing />
                <Trending />
            </div>
        </BrowserRouter>
    );
}

export default App;
