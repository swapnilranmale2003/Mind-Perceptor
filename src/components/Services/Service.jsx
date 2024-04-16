import React from "react";
import "./Service.css";

function Service() {
  return (
    <div id="service-section">
        <div className="wetakecare">We take care of you, so you can take care of your clients.</div>
      <div className="whatwecando">What we can do for you?</div>
      <div className="services container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="service-1">
              <div className="service-logo">
                <img src="assets/app-dev.png" alt="" />
              </div>
              <div className="service-title">Application development</div>
              <div className="service-description">
                Reach your potential audience online with a custom mobile
                application. From the initial design to the final development
                stage, our team of experts will build your application. We
                provide custom applications for android as well as iOS.
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service-1">
              <div className="service-logo">
                <img src="assets/ux.png" alt="" />
              </div>
              <div className="service-title">Website development</div>
              <div className="service-description">
                Your brand deserves the best online face. At Mind Perceptor’s we
                believe in using the best technology to elevate user experience
                by providing a fully functional and responsive website. We
                analyze your business requirements and develop a website that
                matches your needs.
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service-1">
              <div className="service-logo">
                <img src="assets/software.png" alt="" />
              </div>
              <div className="service-title">Software development</div>
              <div className="service-description">
                Scale your business and meet ever-evolving market needs by
                working with us. Our dedicated software development team can
                back you up round the clock to build custom technology solutions
                specific to your industry and business.
              </div>{" "}
            </div>
          </div>
          <div className="col-md-3">
            <div className="service-1">
              <div className="service-logo">
                <img src="assets/talent-search.png" alt="" />
              </div>
              <div className="service-title">Internship to students</div>
              <div className="service-description">
                Get industry ready by working with Mind Perceptor’s. We are here
                to bridge the gap between theoretical knowledge and practical
                knowledge by letting students work on real time projects.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
