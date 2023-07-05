import React from 'react'
import project from '../../assets/jpeg/project-mockup-example.jpeg'
function Projects() {
    return (
        <section id="projects" className="projects sec-pad">
            <div className="main-container">
                <h2 className="heading heading-sec heading-sec__mb-bg">
                    <span className="heading-sec__main">Projects</span>
                    <span className="heading-sec__sub">
                        Within my portfolio, you will discover a personal project showcasing my expertise in frontend development and UI design using React.
                    </span>
                </h2>

                <div className="projects__content">
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img
                                src={project}
                                alt="Software Screenshot"
                                className="projects__row-img"
                                loading="lazy"
                            />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title">EXPENSE TRACKER (Ongoing)</h3>
                            <p className="projects__row-content-desc">
                                Developing an expense tracker web application using React JS, TypeScript, Material UI, and React Router. The application enables users to track their budget and monitor spending habits. It includes features such as authentication pages for login and signup. Currently a work in progress, actively implementing the functionality and enhancing the user experience.
                            </p>
                            <a
                                href="./project-1.html"
                                className="btn btn--med btn--theme dynamicBgClr"
                                target="_blank"
                            >PROJECT</a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects