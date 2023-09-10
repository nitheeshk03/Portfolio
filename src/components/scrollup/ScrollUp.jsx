import React from "react";
import "./scrollup.css";

function ScrollUp(){
    window.addEventListener("scroll", function(){
        const scrollUp = document.querySelector(".scrollup");
        if(this.scrollY >= 520) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll")
    });
    return(
        <a href="#home" className="scrollup">
            <i className="uil uil-arrow-up scrollup-icon"></i>
        </a>
    )
}

export default ScrollUp;