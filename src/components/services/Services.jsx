import React, {useState} from "react";
import "./services.css";

function Services(){
    const [toggleModal, setToggleModal] = useState(0);
    const toggleTab = (index) => {
        setToggleModal(index)
    }

    return(
        <section className="services section" id="courses">
            <h2 className="section__title">Courses</h2>
            <span className="section__subtitle">What I Know</span>
            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Front-end <br/> Developer</h3>
                    </div>
                    <span className="services__button" onClick={()=> toggleTab(1)}>View More 
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleModal===1 ? "services__modal active-modal":"services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Front-end Developer</h3>
                            <p className="services__modal-description">
                            Learnt different courses to explore the front-end development.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">HTML, CSS, and Javascript for Web Developers.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">JavaScript for Beginners Specialization.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">React Basics</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Advanced React</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-brackets-curly services__icon"></i>
                        <h3 className="services__title">Back-end <br/> Developer</h3>
                    </div>
                    <span className="services__button" onClick={()=> toggleTab(2)}>View More 
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleModal===2 ? "services__modal active-modal":"services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Back-end Developer</h3>
                            <p className="services__modal-description">
                            Learnt different languages and frameworks to explore the back-end development.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Core Java</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Spring Framework Specialization</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Node JS</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Python 3.0</p>
                                </li>

                                {/* <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and mockups of products for companies</p>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-robot services__icon"></i>
                        <h3 className="services__title">AI/ML <br /> Entusiast</h3>
                    </div>
                    <span className="services__button" onClick={()=> toggleTab(3)}>View More 
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleModal===3 ? "services__modal active-modal":"services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">AI/ML Entusiast</h3>
                            <p className="services__modal-description">
                            Explored the domain through courses and have research experience in the same.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Hands-on training for ML with python</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Deep Learning Specialization</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Published working notes in ImageClef'22 shared task conference</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Paper published in ICSADL conference</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;