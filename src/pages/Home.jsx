import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import analyticsImage from "../assets/d3face.png"; // adjust the filename

const Home = () => {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/analyze">Analyze Yourself</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>d3lens</h1>
          <p>
           Providing cutting-edge facial and body analytics powered by AI.
            Discover unique insights into your presence and form — all through your photos.
          </p>
        </div>
        <div className="hero-image">
          <img src={analyticsImage} alt="Analytics preview" />
        </div>
      </section>

      {/* Below-the-fold Section */}
      <section className="home-description">
        <p>
          Analyze yourself with facial symmetry, body metrics, posture analysis, and even photogynomic insights.
          Understand how the world might perceive you — with tech that's easy, fun, and surprisingly deep.
        </p>
      </section>
    </div>
  );
};

export default Home;
