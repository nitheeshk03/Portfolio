import React, {useState} from "react";
import "./header.css";

function Header(){

    /* Change Background Header */
    window.addEventListener("scroll", function(){
        const header = document.querySelector(".header");
        if(this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header")
        
    });

    /* For toggling menu */
    const [toggle, setToggle] = useState(false);
    const [activeNav, setActiveNav] = useState("#home")
    // setTimeout(() => {
    //     let url = window.location.href
    //     setActiveNav(url.slice(url.indexOf('#')))
    // }, 500)

    return(
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Nitheesh</a>
                <div className={toggle? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={()=> setActiveNav("#home")} className={activeNav==="#home"?"nav__link active-link":"nav__link"}>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" onClick={()=> setActiveNav("#about")} className={activeNav==="#about"?"nav__link active-link":"nav__link"}>
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" onClick={()=> setActiveNav("#skills")} className={activeNav==="#skills"?"nav__link active-link":"nav__link"}>
                                <i className="uil uil-file-alt nav__icon"></i>
                                Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#courses" onClick={()=> setActiveNav("#courses")} className={activeNav==="#services"?"nav__link active-link":"nav__link"}>
                                <i className="uil uil-book-open nav__icon"></i>
                                Courses
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" onClick={()=> setActiveNav("#portfolio")} className={activeNav==="#portfolio"?"nav__link active-link":"nav__link"}>
                                <i className="uil uil-briefcase-alt nav__icon"></i>
                                Portfolio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" onClick={()=> setActiveNav("#contact")} className={activeNav==="#contact"?"nav__link active-link":"nav__link"}>
                                <i className="uil uil-message nav__icon"></i>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <i 
                        className="uil uil-times nav__close"
                        onClick={() => setToggle(!toggle)}
                    ></i>
                </div>
                <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;