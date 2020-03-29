import React from "react";
import NavItem from "./nav-item";
import itemData from "./navbar/navbar.json";

function NavBar(props) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand text-light" href="index.html">Luke Robinett</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {
                            itemData.map(item => {
                                return (
                                    <NavItem
                                        text={item.text}
                                        to={item.href}
                                        active={item.href === Window.pathname}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default NavBar;