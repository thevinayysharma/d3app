import React from "react";
import "./analyze.css";
import resultBanner from "../assets/d3body.png"; // update path if needed

const Analyze = () => {
  return (
    <div className="analyze-container">
      <h1 className="analyze-title">Analyze Yourself</h1>

      <div className="analyze-content">
        <div className="analyze-steps">
          <div className="step">
            <h2>Step 1</h2>
            <p>
              Capture a photo directly or upload any image of your face or body. Our system is optimized for casual selfies and professional portraits alike.
            </p>
          </div>

          <div className="step">
            <h2>Step 2</h2>
            <p>
              Instantly receive visual analytics and insights. Discover your photogynomic profile, symmetry scores, body alignment, and unique feature points — all processed within seconds.
            </p>
          </div>

          <div className="step">
            <h2>Step 3</h2>
            <p>
              Receive tailored recommendations based on your results — from ideal body proportions for your field, to pose advice, facial aesthetics, and more. Everything designed with your goals and context in mind.
            </p>
          </div>
        </div>

        <div className="analyze-banner">
          <img src={resultBanner} alt="Analytics Result Preview" />
        </div>
      </div>
    </div>
  );
};

export default Analyze;
