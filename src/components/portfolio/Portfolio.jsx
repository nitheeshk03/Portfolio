import React from "react";
import Works from "./Works";
import "./portfolio.css";

function Portfolio(){
    return(
        <section className="work section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most Recent Work</span>

            <Works />
        </section>
    )
}
export default Portfolio;