import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="ftco-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div class="ftco-footer-widget mb-4 p-0">
                <h2 class="ftco-heading-2 pt-3">
                 MIND PERCEPTOR
                </h2>
                <p>
                  A team of talented individuals to make your life simpler with
                  the help of technology. We believe in providing optimal
                  solutions for the continuous growth of our clients.{" "}
                </p>
              </div>
            </div>
            <div class="col-md-1"></div>
            <div className="col-md-3">
              <h2 className="footer-h2 pt-3">Usefull Links</h2>
              <ul className="usefull-links">
                <li>Home</li>
                <li>About Us</li>
                <li>Service</li>
                <li>FAQ</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h2 className="footer-h2 pt-3">Have a Questions?</h2>
              <ul className="usefull-links">
                <li>
                  <a href="#">
                    18, 3rd Floor, B Wing, Sai Meghdhoot Apt, Near Kabra Saree,
                    Pandit Colony, Nashik
                  </a>
                </li>
                <li> +91 90288 89915</li>
                <li> +91 97671 73933</li>
                <li> contact@mindperceptor.com</li>
                <li>www.mindperceptor.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
