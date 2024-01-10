import React from "react";
import "./footer.css";

function Footer(){
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Nitheesh</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/nitheesh-kumar-n/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=919677851538&text=Hello!" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-whatsapp"></i>
                    </a>
                    <a href="https://join.skype.com/invite/wKm4d7V4FijZ" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-skype"></i>
                    </a>
                </div>
                <span className="footer__copy">&#169; Nitheesh Kumar N.</span>
            </div>
        </footer>
    )
}

export default Footer;