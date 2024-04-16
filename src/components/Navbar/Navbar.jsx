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

function Navbar() {
  return (
    <div className="nav">
      <div className="logo">Logo</div>
      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link href="#" onClick={scrollToServiceSection}>
          Services
        </Link>

        <Link href="#" onClick={scrollToWhoMPSection}>
          About Us
        </Link>

        <Link href="#" onClick={scrollToFAQSection}>
          FAQ
        </Link>

        <Link href="#" onClick={scrollToContactSection}>
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
