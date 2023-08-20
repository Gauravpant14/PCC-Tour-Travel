import React from 'react'
import logo from '../../../public/icons/logo-no-background.svg'
import Image from 'next/image';
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {CiFacebook,CiInstagram,CiYoutube} from 'react-icons/ci';
const Header = () => {
    return <header className="header" data-header>

        <div className="overlay" data-overlay></div>

        <div className="header-top">
            <div className="container">

                <a href="tel:9899648946" className="helpline-box">

                    <div className="icon-box">
                        <BiPhoneCall />
                    </div>

                    <div className="wrapper">
                        <p className="helpline-title">For Further Inquires :</p>

                        <p className="helpline-number">+91 (98) 9964 8946</p>
                    </div>

                </a>

                <a href="#" className="logo">
                    <Image src={logo} alt="Tourly logo" height={100} width={200} />
                </a>

                <div className="header-btn-group">

                    <button className="search-btn" aria-label="Search">

                    </button>

                    <button className="nav-open-btn" aria-label="Open Menu" data-nav-open-btn>
                        <AiOutlineMenu />
                    </button>

                </div>

            </div>
        </div>

        <div className="header-bottom">
            <div className="container">

                <ul className="social-list">

                    <li>
                        <a href="#" className="social-link">
                            <CiFacebook />
                        </a>
                    </li>

                    <li>
                        <a href="#" className="social-link">
                        <CiYoutube/>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="social-link">
                           <CiInstagram />
                        </a>
                    </li>

                </ul>

                <nav className="navbar" data-navbar>

                    <div className="navbar-top">

                        <a href="#" className="logo">
                            <Image src={logo} alt="Tourly logo" />
                        </a>

                        <button className="nav-close-btn" aria-label="Close Menu" data-nav-close-btn>
                           <AiOutlineClose/>
                        </button>

                    </div>

                    <ul className="navbar-list">

                        <li>
                            <a href="#home" className="navbar-link" data-nav-link>home</a>
                        </li>

                        <li>
                            <a href="#" className="navbar-link" data-nav-link>about us</a>
                        </li>

                        <li>
                            <a href="#destination" className="navbar-link" data-nav-link>destination</a>
                        </li>

                        <li>
                            <a href="#package" className="navbar-link" data-nav-link>packages</a>
                        </li>

                        <li>
                            <a href="#gallery" className="navbar-link" data-nav-link>gallery</a>
                        </li>

                        <li>
                            <a href="#contact" className="navbar-link" data-nav-link>contact us</a>
                        </li>

                    </ul>

                </nav>

                <button className="btn btn-primary">Book Now</button>

            </div>
        </div>

    </header>
}

export default Header