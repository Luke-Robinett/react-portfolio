import React from "react";

function Footer(props) {
    return (
        <footer className="fixed-bottom bg-info text-light text-center my-3-md py-3-md">
            &copy; {props.date} by {props.name}
        </footer>
    )
}

export default Footer;