import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Landing from "./containers/Landing/Landing";
import Trending from "./containers/Trending/Trending";
import Products from "./containers/Products/Products";
import { getAllShoes } from "./services/shoes";
import IndProdPage from "./containers/IndProdPage/IndProdPage";
import CartPage from "./containers/CartPage/CartPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Nav />
                <Routes>
                    <Route
                        path="/shoes"
                        element={
                            <>
                                <Landing />
                                <Trending />
                                <Products />
                            </>
                        }
                    />
                    <Route path="/shoes/:id" element={<IndProdPage />} />
                    <Route path="/shoes/cart" element={<CartPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
