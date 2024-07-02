import React, {useState} from "react";
import "./qualifications.css";

function Qualification(){
    const [toggleModal, setToggleModal] = useState(1);
    const toggleTab = (index) => {
        setToggleModal(index)
    }

    return(
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div 
                        className={
                            toggleModal === 1
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex" }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div 
                        className={
                            toggleModal === 2
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex" }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    <div 
                        className={
                            toggleModal===1
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"}
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Computer Science and Engineering</h3>
                                <span className="qualification__subtitle">SSN College of Engineering - India</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Grade XII</h3>
                                <span className="qualification__subtitle">Achariya Bala Siksha Mandir - India</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019 - 2020
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Grade X</h3>
                                <span className="qualification__subtitle">PSBB Millennium School - India</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2017 - 2018
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UX Expert</h3>
                                <span className="qualification__subtitle">India - Institute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2017 - Present
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div
                        className={
                            toggleModal===2
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"}
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full Stack Engineer Intern</h3>
                                <span className="qualification__subtitle">Fidelity Investments - India</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Feb - Jun 2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Software Developer Intern</h3>
                                <span className="qualification__subtitle">Fidelity Investments - India</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Jun - Aug 2023
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Student Intern</h3>
                                <span className="qualification__subtitle">IBM - India</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Sept. 2018
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualification__subtitle">India - Institute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2018 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;