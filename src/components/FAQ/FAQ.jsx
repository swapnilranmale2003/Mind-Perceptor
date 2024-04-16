import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import "./FAQ.css";

function FAQ() {
  const [expanded, setExpanded] = useState({});

  const toggleQuestion = (index) => {
    setExpanded((prevState) => {
      const nextState = { ...prevState };
      Object.keys(nextState).forEach((key) => {
        nextState[key] = false; // Close all other dropdowns
      });
      nextState[index] = !prevState[index]; // Toggle the clicked dropdown
      return nextState;
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "400px",
        }}
      >
        <img
          src="https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/f894db7507df5208a83a343c/Untitled-1.png"
          alt=""
        />
      </div>
      <div>
        <div className="faq" onClick={() => toggleQuestion(0)}>
          <p>Which tools and technologies do you use</p>
         
        </div>
        {expanded[0] && (
          <div className="answer">
            <p>Answer goes here...</p>
          </div>
        )}
        <div className="faq" onClick={() => toggleQuestion(1)}>
          <p>Will I be getting any support after completion of project?</p>
         
        </div>
        {expanded[1] && (
          <div className="answer">
            <p>Answer goes here...</p>
          </div>
        )}
        <div className="faq" onClick={() => toggleQuestion(2)}>
          <p>What is the difference between native app and a web app?</p>
         
        </div>
        {expanded[2] && (
          <div className="answer">
            <p>Answer goes here...</p>
          </div>
        )}
      </div>
    </>
  );
}

export default FAQ;
