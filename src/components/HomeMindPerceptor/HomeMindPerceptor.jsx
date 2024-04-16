import React from "react";
import "./HomeMindPerceptor.css";
import { Button } from "@mui/material";
import { FaHandshakeAngle } from "react-icons/fa6";

function HomeMindPerceptor() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <h1 className="h1-align">
              Your IT partner to {"  "}
              <span>
                 <FaHandshakeAngle color="#007bff" size={"4rem"} />
              </span>
              {"  "}
              reimagine lives
            </h1>
            <p>
              Delivering best-in-class software solutions by leveraging
              cutting-edge technology.
            </p>
            <Button size="large" variant="contained">
              Contact Us
            </Button>
          </div>
          <div className="col-md-7">
            <img className="homemp" src="assets/homeMP.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeMindPerceptor;
