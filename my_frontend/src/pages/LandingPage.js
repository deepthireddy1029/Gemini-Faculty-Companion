import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">

      <header className="navbar">
        <h1 className="logo">Silverleaf University</h1>

        <div className="nav-actions">
          <button className="nav-login" onClick={() => navigate("/login")}>Login</button>
          <button className="nav-register" onClick={() => navigate("/register")}>Register</button>
        </div>
      </header>

      <main className="hero">

        <div className="hero-left">
          <h1 className="hero-title">Gemini Faculty Companion</h1>
            <br/>
          <p className="hero-text">
            A complete training platform that supports faculty in learning Gemini LTI,
            NotebookLM, prompting skills, assessments and certification. This system is
            designed to build personalized learning and collaboration across Silverleaf University.
          </p>
         <div className ="center-container">
          <button className="hero-btn" onClick={() => navigate("/login")}>
            Get Started
          </button>
          </div>
        </div>

        {/* <div className="hero-right">
          <img
            src="https://undraw.co/api/illustrations/a52e5a81-38dd-4bce-be67-af1c887eaf52"
            alt="Faculty Learning Illustration"
          />
        </div> */}

      </main>

      <footer className="footer">
        © 2025 Silverleaf University. All rights reserved.
      </footer>

    </div>
  );
}
