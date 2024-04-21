import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function scrollToServiceSection() {
  const serviceSection = document.getElementById("service-section");
  if (serviceSection) {
    serviceSection.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToFAQSection() {
  const faqSection = document.getElementById("faq-section");
  if (faqSection) {
    faqSection.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToContactSection() {
  const contactSection = document.getElementById("contact-sec");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToWhoMPSection() {
  const whoMPSection = document.getElementById("whomp-section");
  if (whoMPSection) {
    whoMPSection.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToHomeSection() {
  const homeSection = document.getElementById("home-section");
  if (homeSection) {
    homeSection.scrollIntoView({ behavior: "smooth" });
  }
}

function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <img className="logo-img" src="assets/MP.png" alt="" />
      </div>
      <div className="nav-links">
        <a href="#" onClick={scrollToHomeSection}>
          Home
        </a>

        <a href="#" onClick={scrollToServiceSection}>
          Services
        </a>

        <a href="#" onClick={scrollToWhoMPSection}>
          About Us
        </a>

        <a href="#" onClick={scrollToFAQSection}>
          FAQ
        </a>

        <a href="#" onClick={scrollToContactSection}>
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default Navbar;
