import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Landing from "./containers/Landing/Landing";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Nav />
                <Landing />
            </div>
        </BrowserRouter>
    );
}

export default App;
