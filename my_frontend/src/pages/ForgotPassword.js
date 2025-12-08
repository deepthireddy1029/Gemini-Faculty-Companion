import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function ForgotPassword() {

    const navigate = useNavigate();

    const [role, setRole] = useState("FACULTY");
    const [email, setEmail] = useState("");
    const [adminCode, setAdminCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const ADMIN_CODES = ["ADM-UNI-2025", "ADM-001", "ADM-987"];

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!email.trim()) {
            setError("Email is required");
            return;
        }

        if (role === "ADMIN" && !ADMIN_CODES.includes(adminCode.trim())) {
            setError("Invalid Admin Unique ID");
            return;
        }

        if (newPassword !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setSuccess("Password reset successfully.");
    };

    return (
        <div className="login-page">

            {/* Top Bar */}
            <div className="top-bar">
                <h2 className="top-left">Silverleaf University</h2>

                <button className="home-btn" onClick={() => navigate("/")}>
                    Home
                </button>
            </div>

            <div className="center-wrapper">

                <h1 className="main-title">Gemini Faculty Companion</h1>

                {/* Forgot Password Card */}
                <div className="login-card">

                    <h2 className="card-title">Forgot Password</h2>

                    {error && <div className="error-box">{error}</div>}
                    {success && <div className="success-box">{success}</div>}

                    <form onSubmit={handleSubmit}>

                        {/* SELECT ROLE */}
                        <select
                            className="input-box"
                            value={role}
                            onChange={e => setRole(e.target.value)}
                        >
                            <option value="FACULTY">Faculty</option>
                            <option value="ADMIN">Admin</option>
                        </select>

                        {/* ADMIN UNIQUE ID */}
                        {role === "ADMIN" && (
                            <input
                                className="input-box"
                                placeholder="Admin Unique ID"
                                value={adminCode}
                                onChange={e => setAdminCode(e.target.value)}
                            />
                        )}

                        {/* EMAIL */}
                        <input
                            className="input-box"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />

                        {/* NEW PASSWORD */}
                        <input
                            className="input-box"
                            type="password"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={e => setNewPassword(e.target.value)}
                        />

                        {/* CONFIRM PASSWORD */}
                        <input
                            className="input-box"
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />

                        <button className="submit-btn" type="submit">
                            Reset Password
                        </button>
                    </form>

                    <p className="login-text">
                        Back to{" "}
                        <a className="register-link" onClick={() => navigate("/login")}>
                            Login
                        </a>
                    </p>

                </div>
            </div>

        </div>
    );
}
