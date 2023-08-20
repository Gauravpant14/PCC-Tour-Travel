import React from 'react'
import Image from 'next/image';
import logo from '../../../public/icons/logo-no-background.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">

          <div className="footer-brand">

            <a href="#" className="logo">
              <Image src={logo} alt="Tourly logo" />
            </a>

            <p className="footer-text">
              "Experience seamless travel with PCC Tour & Travel. We offer hassle-free airport pickup and dropping services, along with reliable and comfortable taxi services, ensuring your journey is exceptional and stress-free."
            </p>

          </div>

          <div className="footer-contact">

            <h4 className="contact-title">Contact Us</h4>

            <p className="contact-text">
              Feel free to contact and reach us !!
            </p>

            <ul>

              <li className="contact-item">
                {/* <ion-icon name="call-outline"></ion-icon> */}

                <a href="tel:9899648946" className="contact-link">+91 (98) 9964 8946</a>
              </li>

              <li className="contact-item">
                {/* <ion-icon name="mail-outline"></ion-icon> */}

                <a href="mailto:pcctour@gmail.com" className="contact-link">pcctour@gmail.com</a>
              </li>

              <li className="contact-item">
                {/* <ion-icon name="location-outline"></ion-icon> */}

                <address>A-184, Gali No. 1, Mahipalpur, New Delhi-110037</address>
              </li>

            </ul>

          </div>

          <div className="footer-form">

            <p className="form-text">
              Subscribe our newsletter for more update & news !!
            </p>

            <form action="" className="form-wrapper">
              <input type="email" name="email" className="input-field" placeholder="Enter Your Email" required />

              <button type="submit" className="btn btn-secondary">Subscribe</button>
            </form>

          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">

          <p className="copyright">
            &copy; 2023 <a href="">Gaurav</a>. All rights reserved
          </p>

          <ul className="footer-bottom-list">

            <li>
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
            </li>

            <li>
              <a href="#" className="footer-bottom-link">Term & Condition</a>
            </li>

            <li>
              <a href="#" className="footer-bottom-link">FAQ</a>
            </li>

          </ul>

        </div>
      </div>

    </footer>
  )
}

export default Footer