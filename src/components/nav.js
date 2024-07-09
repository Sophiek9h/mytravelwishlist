import React from "react";
import logo from "../img/logo.png"


export default function Nav (){
    return(
        <nav>
            <img className="logo-img" src={logo} alt="logo" />
            <p className="nav-text" >My Travel Wishlist</p>
        </nav>
    )
}