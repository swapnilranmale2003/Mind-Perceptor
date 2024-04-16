import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import "./FAQ.css";

function FAQ() {
  const [expanded, setExpanded] = useState({});

  const toggleQuestion = (index) => {
    setExpanded((prevState) => {
      const nextState = { ...prevState };
      Object.keys(nextState).forEach((key) => {
        nextState[key] = false;
      });
      nextState[index] = !prevState[index];
      return nextState;
    });
  };

  return (
    <div id="faq-section" className="faq-section">
      <div className="faq-header">
        <img
          src="https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/f894db7507df5208a83a343c/Untitled-1.png"
          alt=""
          className="faq-header-image"
        />
      </div>
      <div className="faqmain">
        <div
          className={`faq ${expanded[0] ? "expanded" : ""}`}
          onClick={() => toggleQuestion(0)}
        >
          <p className="question">Which tools and technologies do you use?</p>
        </div>
        {expanded[0] && (
          <div className="answer">
            <p className="answerp">Answer goes here...</p>
          </div>
        )}
        <div
          className={`faq ${expanded[1] ? "expanded" : ""}`}
          onClick={() => toggleQuestion(1)}
        >
          <p className="question">
            Will I be getting any support after completion of the project?
          </p>
        </div>
        {expanded[1] && (
          <div className="answer">
            <p>Answer goes here...</p>
          </div>
        )}
        <div
          className={`faq ${expanded[2] ? "expanded" : ""}`}
          onClick={() => toggleQuestion(2)}
        >
          <p className="question">
            What is the difference between a native app and a web app?
          </p>
        </div>
        {expanded[2] && (
          <div className="answer">
            <p>Answer goes here...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FAQ;
