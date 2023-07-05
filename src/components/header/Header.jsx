import React, { useState } from 'react'
import DP from '../../assets/png/prasath.png'
import HAMBURGERMENU from '../../assets/svg/ham-menu.svg'
import HAMBURGERMENUCLOSE from '../../assets/svg/ham-menu-close.svg'
function Header() {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleLogoClick = () => {
        window.location.href = 'index.html';
    };


    return (
        <header className="header">
            <div className="header__content">
                <div className="header__logo-container" onClick={handleLogoClick}>
                    <div className="header__logo-img-cont">
                        <img
                            src={DP}
                            alt="Lakshmi Prasath Logo Image"
                            className="header__logo-img"
                        />
                    </div>
                    <span className="header__logo-sub">LAKSHMI PRASATH</span>
                </div>
                <div className="header__main">
                    <ul className="header__links">
                        <li className="header__link-wrapper">
                            <a href="./index.html" className="header__link"> Home </a>
                        </li>
                        <li className="header__link-wrapper">
                            <a href="./index.html#about" className="header__link">About </a>
                        </li>
                        <li className="header__link-wrapper">
                            <a href="./index.html#projects" className="header__link">
                                Projects
                            </a>
                        </li>
                        <li className="header__link-wrapper">
                            <a href="./index.html#contact" className="header__link"> Contact </a>
                        </li>
                    </ul>
                    <div className="header__main-ham-menu-cont" onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <img
                                src={HAMBURGERMENUCLOSE}
                                alt="hamburger menu close"
                                className="header__main-ham-menu-close"
                            />
                        ) : (
                            <img
                                src={HAMBURGERMENU}
                                alt="hamburger menu"
                                className="header__main-ham-menu"
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className={`header__sm-menu ${isMenuOpen ? 'header__sm-menu--active' : ''}`}>
                <div className="header__sm-menu-content">
                    <ul className="header__sm-menu-links">
                        <li className="header__sm-menu-link" onClick={closeMenu}>
                            <a href="./index.html"> Home </a>
                        </li>

                        <li className="header__sm-menu-link" onClick={closeMenu}>
                            <a href="./index.html#about"> About </a>
                        </li>

                        <li className="header__sm-menu-link" onClick={closeMenu}>
                            <a href="./index.html#projects"> Projects </a>
                        </li>

                        <li className="header__sm-menu-link" onClick={closeMenu}>
                            <a href="./index.html#contact"> Contact </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header