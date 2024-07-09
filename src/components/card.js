import React from "react";
import img from "../img/benin.png"
import imgg from "../img/Path.png"





export default function Card() {
    return (
        <div className="card">
            <img className="card-img" src={img} alt="" />
            <div className="card-details">
                <div className="card-location-details">
                    <img src={imgg} alt="" className="location-icon"/>
                    <p className="location">JAPAN</p>
                    <a href="#" className="location-link">View on Google Maps</a>
                </div>
                <h1 className="place">Mount Fuji</h1>
                <p>12 Jan, 2021 - 24 Jan, 2021</p>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}