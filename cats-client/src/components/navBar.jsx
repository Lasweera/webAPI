import React, { Component } from "react";
import { Link, link } from "react-router-dom";

class navBar extends Component {
    state = {};
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/">
                        Home
                    </Link>
                    <Link className="nav-item nav-link " to="/cats">
                        Cats
                    </Link>
                </div>
            </nav>
        );

    }
}


export default navBar