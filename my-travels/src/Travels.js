import React from "react";
import Travel from "./Travel"

const travelArray = [
    {
        destination: "Le Cap",
        country: "South Africa",
        photo: "https://image.ibb.co/kBmGcU/hippo_515027_1280.jpg",
        distance: 12709

    },

    {
        destination: "Wellington",
        country: "New-Zealand",
        photo: "https://image.ibb.co/jbXa49/new_zealand_225540_1280.jpg",
        distance: 18974

    },

    {
        destination: "Paris",
        country: "France",
        photo: "https://image.ibb.co/hfCWjz/paris4.jpg",
        distance: 382

    },

    {
        destination: "La Digue",
        country: "Seychelles",
        photo: "https://image.ibb.co/cxVyrp/seychelles_1556122_1280.jpg",
        distance: 7856

    },

];

const Travels = () => (
  <div>
    {travelArray.map(i => (
        <Travel destination ={i.destination} country={i.country} photo={i.photo} distance= {i.distance}/>

    ))}
  </div>
);
    

export default Travels;
