import React from "react";
import pizzaBoxScreen from "../assets/img/pizzabox-screen.png";
import plannerScreen from "../assets/img/planner-screen.png";
import weatherScreen from "../assets/img/weather-screen.png";

function GalleryItem(props) {
    const { title, image, appLink, gitLink, description } = props;

    return (
        <div className="col-12 col-lg-3 M-2">
            <div className="card">
                <img className="card-img-top"
                    src={image}
                    alt={title}
                />

                <div className="card-body">
                    <h5 className="card-title">
                        {title}
                    </h5>

                    <a className="btn btn-primary" target="_blank" role="button"
                        href={appLink}
                    >
                        Launch
                    </a>

                    <a className="btn btn-secondary" target="_blank" role="button"
                        href={gitLink}
                    >
                        Visit Repo
                    </a>

                    <p className="card-text">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GalleryItem;
