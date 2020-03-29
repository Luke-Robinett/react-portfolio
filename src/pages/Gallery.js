import React from "react";
import pizzaBoxScreen from "../assets/img/pizzaBoxScreen.png";
import plannerScreen from "../assets/img/planner-screen.png";
import weatherScreen from "../assets/img/weather-screen.png";

function Gallery() {
  return (
    <h1>Gallery</h1>
    <hr />
    <div className="row">
      <div className="col-12 col-lg-3 M-2">
        <div className="card">
          <img src=pizzaBoxScreen className="card-img-top" alt="Screenshot of PizzaBox app" />
          <div className="card-body">
            <h5 className="card-title">PizzaBox</h5>
            <a href="https://luke-robinett.github.io/PizzaBox/" target="_blank" className="btn btn-primary"
              role="button">Launch</a> &nbsp;
            <a href="https://github.com/Luke-Robinett/pizzabox" target="_blank" className="btn btn-secondary"
              role="button">Visit Repo</a>
            <p className="card-text">The recipe search app PizzaBox is a collaborative project where I am one of three
              contributors. I developed the JavaScript for the app functionality and partnered on UI design.</p>
            <p className="card-text">The app utilizes the Edamam recipe search API. It allows users to search for any
            igredient or
              dish and then get detailed nutrition and ingredient information.</p>
          </div>
        </div>
      </div>

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
    </div>
)
}

export default Gallery;