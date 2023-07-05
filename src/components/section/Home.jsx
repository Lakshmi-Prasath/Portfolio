import React from 'react'
import linkedIn from '../../assets/png/linkedin-ico.png'
import github from '../../assets/png/github-ico.png'
import twitter from '../../assets/png/twitter-ico.png'
import instagram from '../../assets/png/insta-ico.png'
import youtube from '../../assets/png/yt-ico.png'
function Home() {
    return (
        <section className="home-hero">
            <div className="home-hero__content">
                <h1 className="heading-primary">Hey, My name is LAKSHMI PRASATH</h1>
                <div className="home-hero__info">
                    <p className="text-primary">
                        Passionate fresher with expertise in HTML, CSS, JavaScript, ReactJS, and a strong drive for continuous learning and growth.
                    </p>
                </div>
                <div className="home-hero__cta">
                    <a href="./#projects" className="btn btn--bg">Projects</a>
                </div>
            </div>
            <div className="home-hero__socials">
                <div className="home-hero__social">
                    <a href="#" className="home-hero__social-icon-link">
                        <img
                            src={linkedIn}
                            alt="icon"
                            className="home-hero__social-icon"
                        />
                    </a>
                </div>
                <div className="home-hero__social">
                    <a href="#" className="home-hero__social-icon-link">
                        <img
                            src={github}
                            alt="icon"
                            className="home-hero__social-icon"
                        />
                    </a>
                </div>
                <div className="home-hero__social">
                    <a href="#" className="home-hero__social-icon-link">
                        <img
                            src={twitter}
                            alt="icon"
                            className="home-hero__social-icon"
                        />
                    </a>
                </div>
                <div className="home-hero__social">
                    <a href="#" className="home-hero__social-icon-link">
                        <img
                            src={youtube}
                            alt="icon"
                            className="home-hero__social-icon"
                        />
                    </a>
                </div>
                <div className="home-hero__social">
                    <a
                        href="#"
                        className="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
                    >
                        <img
                            src={instagram}
                            alt="icon"
                            className="home-hero__social-icon"
                        />
                    </a>
                </div>
            </div>
            <div className="home-hero__mouse-scroll-cont">
                <div className="mouse"></div>
            </div>
        </section>
    )
}

export default Home