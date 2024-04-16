import React from "react";
import "./WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <>
      <div className="whychooseus">Why Choose Us</div>
      <div className="choose container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="choose-1">
              <div className="choose-title">Quality product</div>
              <div className="choose-description">
                We work closely with our clients to truly understand their needs
                and create projects that provide true value for money. We
                constantly take feedback and make iterations until it aligns
                with what you wanted.
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="choose-1">
              <div className="choose-title">Strong expertise</div>
              <div className="choose-description">
                Our team is made up of the best developers in the industry, with
                a rich history of experience and diverse backgrounds that allow
                us to optimize all processes and employ the best agile practices
                to develop software solutions.
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="choose-1">
              <div className="choose-title">Complete transparency</div>
              <div className="choose-description">
                We believe that mutual trust and transparency lead to effective
                business. We always keep our clients up to date with the status
                of their project and communicate efficiently to understand their
                goals.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
