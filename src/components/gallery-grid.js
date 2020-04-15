import React from "react";
import GalleryItem from "./gallery-item";
import excelsiorScreen from "../assets/img/excelsior-screen.png";
import peerupScreen from "../assets/img/peerup-screen.png";
import pizzaBoxScreen from "../assets/img/pizzabox-screen.png";
import empDirScreen from "../assets/img/empdirectory_screen.png"
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

            <GalleryItem
                title="PeerUp"
                image={peerupScreen}
                appLink="https://peer-up.herokuapp.com/"
                gitLink="https://github.com/marissa-lc/Peer-One"
                description="Collaborative project demonstrating a social media app aimed toward connecting students with peer mentors in their area of study"
            />

            <GalleryItem
                title="Excelsior"
                image={excelsiorScreen}
                appLink=""
                gitLink="https://github.com/equilinquin/Project-3"
                description="Collaborative project where comic book lovers can search for their favorite comics and characters and connect with other fans"
            />

            <GalleryItem
                title="React Employee Directory"
                image={empDirScreen}
                appLink="https://luke-robinett.github.io/react-employee-directory"
                gitLink="https://github.com/Luke-Robinett/react-employee-directory"
                description="React app demonstrating a searchable and sortable employee directory"
            />

            <GalleryItem
                title="Weather Dashboard"
                image={weatherScreen}
                appLink="https://luke-robinett.github.io/weather-dashboard/"
                gitLink="https://github.com/Luke-Robinett/weather-dashboard"
                description="Weather Dashboard app that leverages the Open Weather API to provide current conditions and a five-day forecast for the visitor's current location or any city in the world"
            />

            <GalleryItem
                title="Day Planner"
                image={plannerScreen}
                appLink="https://luke-robinett.github.io/day-planner"
                gitLink="https://github.com/Luke-Robinett/day-planner"
                description="Demonstrates a simple daily calendar that allows for storage and retrieval of daily notes and reminders"
            />
        </div >
    )
}

export default GalleryGrid;
