import React from "react";
import "./ContactPage.css";
import { Button } from "@mui/material";
function ContactPage() {
  return (
    <div id="contact-sec">
      <div className="contact-section container-fluid">
        <h1 className="contact-title">Contact Us</h1>
        <div className="row">
          <div className="col-md-6 contact-left">
            <input
              type="text"
              className="form-control"
              style={{ marginBottom: "10px" }}
              placeholder="Enter your name"
            />
            <input
              type="email"
              className="form-control"
              style={{ marginBottom: "10px" }}
              placeholder="Enter your email"
            />
            <textarea
              className="form-control"
              style={{ marginBottom: "10px" }}
              placeholder="Enter your message"
              rows="5"
            ></textarea>
            <Button className="contact-btn" size="large" variant="contained">
              Submit!!
            </Button>
          </div>

          <div className="col-md-6 contact-img">
            <img
              src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="Contact Image"
              className="img-fluid conteactImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
