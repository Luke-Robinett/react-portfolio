import React from "react";
import GalleryItem from "./gallery-item";
import pizzaBoxScreen from "../assets/img/pizzabox-screen.png";
import plannerScreen from "../assets/img/planner-screen.png";
import weatherScreen from "../assets/img/weather-screen.png";

function GalleryGrid(props) {
    return (
        <div>
            <GalleryItem
                title="PizzaBox"
                image={pizzaBoxScreen}
                appLink="https://luke-robinett.github.io/PizzaBox"
                gitLink="https://github.com/Luke-Robinett/pizzabox"
                description="Collaborative project demonstrating a recipe search and nutrition app"
            />

            <div className="col-12 col-lg-3 M-2">
                <div className="card">
                    <img src={weatherScreen} className="card-img-top" alt="Screenshot of Weather Dashboard app" />
                    <div className="card-body">
                        <h5 className="card-title">Weather Dashboard</h5>
                        <a href="https://luke-robinett.github.io/weather-dashboard/" target="_blank" className="btn btn-primary"
                            role="button">Launch</a> &nbsp;
            <a href="https://github.com/Luke-Robinett/weather-dashboard" target="_blank" className="btn btn-secondary"
                            role="button">Visit Repo</a>
                        <p className="card-text">My Weather Dashboard app leverages the Open Weather API to provide current conditions
              and a five-day forecast for the visitor's current location or any city in the world.</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-3 M-2">
                <div className="card">
                    <img src={plannerScreen} className="card-img-top" alt="Screenshot of Day Planner app" />
                    <div className="card-body">
                        <h5 className="card-title">Day Planner</h5>
                        <a href="https://luke-robinett.github.io/day-planner/" target="_blank" className="btn btn-primary"
                            role="button">Launch</a> &nbsp;
            <a href="https://github.com/Luke-Robinett/day-planner" target="_blank" className="btn btn-secondary"
                            role="button">Visit Repo</a>
                        <p className="card-text">My Day Planner app demonstrates a simple daily calendar that allows for storage and
              retrieval of daily notes and reminders.</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default GalleryGrid;
