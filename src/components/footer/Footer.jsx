import React from 'react'
import linkedIn from '../../assets/png/linkedin-ico.png'
import github from '../../assets/png/github-ico.png'
import twitter from '../../assets/png/twitter-ico.png'
import instagram from '../../assets/png/insta-ico.png'
import youtube from '../../assets/png/yt-ico.png'
function Footer() {
    return (
        <footer className="main-footer">
            <div className="main-container">
                <div className="main-footer__upper">
                    <div className="main-footer__row main-footer__row-1">
                        <h2 className="heading heading-sm main-footer__heading-sm">
                            <span>Social</span>
                        </h2>
                        <div className="main-footer__social-cont">
                            <a target="_blank" rel="noreferrer" href="#">
                                <img
                                    className="main-footer__icon"
                                    src={linkedIn}
                                    alt="icon"
                                />
                            </a>
                            <a target="_blank" rel="noreferrer" href="#">
                                <img
                                    className="main-footer__icon"
                                    src={github}
                                    alt="icon"
                                />
                            </a>
                            <a target="_blank" rel="noreferrer" href="#">
                                <img
                                    className="main-footer__icon"
                                    src={twitter}
                                    alt="icon"
                                />
                            </a>
                            <a target="_blank" rel="noreferrer" href="#">
                                <img
                                    className="main-footer__icon"
                                    src={youtube}
                                    alt="icon"
                                />
                            </a>
                            <a target="_blank" rel="noreferrer" href="#">
                                <img
                                    className="main-footer__icon main-footer__icon--mr-none"
                                    src={instagram}
                                    alt="icon"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="main-footer__row main-footer__row-2">
                        <h4 className="heading heading-sm text-lt">LAKSHMI PRASATH</h4>
                        <p className="main-footer__short-desc">
                            A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
                        </p>
                    </div>
                </div>
                <div className="main-footer__lower">
                    &copy; Copyright 2023. Made by
                    <a rel="noreferrer" target="_blank"
                    >LAKSHMI PRASATH</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer