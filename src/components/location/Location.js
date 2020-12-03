import React from "react"
import "./Location.css"


export function Location({location}) {
    const isHandicapAccesible = location.handicap
    if(isHandicapAccesible){
        return (
            <section className="location">
         <h3 className="location__name">{location.name}</h3>
         <address className="location__address">{location.address}</address>
         <p className="location__sqrft">Square Footage: {location.sqrft}</p>
         <p className="location__handicap">Handicap Accessible</p>
         </section>
        )
    } else{
     return(
         <section className="location">
         <h3 className="location__name">{location.name}</h3>
         <address className="location__address">{location.address}</address>
         <p className="location__sqrft">Square Footage: {location.sqrft}</p>
         </section>
         )   
    }
}