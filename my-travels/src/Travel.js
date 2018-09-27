import React from "react";

const Travel = ({destination, country, photo, distance}) => (
    <div>
        <h1>{destination}</h1>
        <h2>Bienvenue en {country}</h2>
        <img src={photo}/>
        <p>Génial tu es à {distance} km de chez toi !</p>
    </div> 
)

export default Travel;