import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-basic">
      <footer>
        <div className="contact">
          <h1 className="contact-title">CONTACT</h1>
          <p className="email">filler@filler.com</p>
        </div>
        <div className="social">
          <a href="/">
            <i className="icon ion-social-instagram"></i>
          </a>
          <a href="/">
            <i className="icon ion-social-snapchat"></i>
          </a>
          <a href="/">
            <i className="icon ion-social-twitter"></i>
          </a>
          <a href="/">
            <i className="icon ion-social-facebook"></i>
          </a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/">Home</a>
          </li>
          <li className="list-inline-item">
            <a href="/">Services</a>
          </li>
          <li className="list-inline-item">
            <a href="/">About</a>
          </li>
          <li className="list-inline-item">
            <a href="/">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="/">Privacy Policy</a>
          </li>
        </ul>
        <p className="copyright">Company Name © 2018</p>
      </footer>
    </div>
  );
}
