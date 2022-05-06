import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Cat from "./components/cat";
import Cats from "./components/cats";
import Catdetails from "./components/catdetails";
import NavBar from "./components/navBar";
import Home from "./components/home";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
    <BrowserRouter>
        <NavBar />
        <React.Fragment>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/cats" element={<Cats />} />
                <Route exact path="/cats/:catid" component={<Catdetails />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>,
    document.getElementById("root")
);