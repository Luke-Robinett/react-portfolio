import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand text-light" to="/">Luke Robinett</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li
                            className={(window.location.pathname === "/" || window.location.pathname === "/about")
                                ? "nav-item active"
                                : "nav-item"
                            }
                        >
                            <Link
                                className="nav-link"
                                to="/about"
                            >
                                About
                                {(window.location.pathname === "/" || window.location.pathname === "/about")
                                    ? <span className="sr-only">(current)</span>
                                    : null
                                }
                            </Link>
                        </li >
                        <li
                            className={(window.location.pathname === "/gallery")
                                ? "nav-item active"
                                : "nav-item"
                            }
                        >
                            <Link
                                className="nav-link"
                                to="/gallery"
                            >
                                Gallery
                                {(window.location.pathname === "/gallery")
                                    ? <span className="sr-only">(current)</span>
                                    : null
                                }
                            </Link>
                        </li >
                        <li
                            className={(window.location.pathname === "/contact")
                                ? "nav-item active"
                                : "nav-item"
                            }
                        >
                            <Link
                                className="nav-link"
                                to="/contact"
                            >
                                Contact
                                {(window.location.pathname === "/contact")
                                    ? <span className="sr-only">(current)</span>
                                    : null
                                }
                            </Link>
                        </li >
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;