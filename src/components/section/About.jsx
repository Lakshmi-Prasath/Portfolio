import React from 'react'

function About() {
    return (
        <section id="about" className="about sec-pad">
            <div className="main-container">
                <h2 className="heading heading-sec heading-sec__mb-med">
                    <span className="heading-sec__main">About Me</span>
                    <span className="heading-sec__sub"></span>
                </h2>
                <div className="about__content">
                    <div className="about__content-main">
                        <h3 className="about__content-title">Get to know me!</h3>
                        <div className="about__content-details">
                            <p className="about__content-details-para">
                                As a motivated and ambitious fresher in the field of web development, I bring a strong foundation in HTML, CSS, JavaScript, and ReactJS to the table. I am proficient in creating visually appealing and responsive web applications using popular libraries and frameworks such as Material-UI, Bootstrap, and React Router. I also have experience in implementing regex validation for data input. While my conceptual knowledge of Redux, Axios, and authentication is still developing, I am eager to learn and apply these concepts in practical projects. I am passionate about writing clean and maintainable code, and I continuously strive to enhance my skills and stay updated with the latest industry trends. As a collaborative team member, I value effective communication and teamwork to achieve exceptional results. I am excited to contribute my skills and enthusiasm to projects that offer opportunities for learning and growth. Let's create innovative web experiences together!
                            </p>

                        </div>
                        <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr">Contact</a>
                    </div>
                    <div className="about__content-skills">
                        <h3 className="about__content-title">My Skills</h3>
                        <div className="skills">
                            <div className="skills__skill">HTML</div>
                            <div className="skills__skill">CSS</div>
                            <div className="skills__skill">JavaScript</div>
                            <div className="skills__skill">React</div>
                            <div className="skills__skill">MATERIAL UI</div>
                            <div className="skills__skill">BOOTSTRAP</div>
                            <div className="skills__skill">REACT ROUTER</div>
                            <div className="skills__skill">FORM VALIDATION</div>
                            <div className="skills__skill">GIT</div>
                            <div className="skills__skill">AUTHENTICATION</div>
                            <div className="skills__skill">AXIOS</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About