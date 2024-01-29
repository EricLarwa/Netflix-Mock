import React, { Component } from "react";

class Navbar extends Component {

    render () {
        return (
            <div clasName="navbar">
                <img
                    className="netflix-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
                    alt="Netflix"/>
            </div>
        )
    }
}

export default Navbar;