import React from "react";
import { Link } from "react-router-dom";

function NavItem(props) {
    return (
        <li
            className={(props.active) ? "nav-item active" : "nav-item"}
        >
            <Link
                className="nav-link"
                to={props.href}
            >
                {props.text}
                {(props.active) ? <span className="sr-only">(current)</span> : null}
            </Link>
        </li >
    )
}

export default NavItem;