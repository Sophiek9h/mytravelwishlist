import React from "react";
import imgg from "../img/Path.png"



export default function Card(props) {
console.log(props)
    return (
        <div className="card">
            <img className="card-img" src={props.item.imageUrl} alt="" />
            <div className="card-details">
                <div className="card-location-details">
                    <img src={imgg} alt="" className="location-icon"/>
                    <p className="location">{props.item.location}</p>
                    <a href={props.item.googleMapsUrl} className="location-link">View on Google Maps</a>
                </div>
                <h1 className="place">{props.item.title}</h1>
                <p className="date" >{props.item.startDate} - {props.item.endDate}</p>
                <p className="des">{props.item.description}</p>
            </div>
        </div>
    )
}