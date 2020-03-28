import React from "react";

function NavItem(props) {
    return (
        <li
            className={(props.active) ? "nav-item active" : "nav-item"}
        >
            <a
                className="nav-link"
                href={props.href}
            >
                {props.text}
                {(props.active) ? <span className="sr-only">(current)</span> : null}
            </a>
        </li >
    )
}

export default NavItem;