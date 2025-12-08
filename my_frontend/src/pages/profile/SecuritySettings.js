import React, { useState } from "react";
import "../../styles/SecuritySettings.css";

export default function SecuritySettings() {
    const [passwords, setPasswords] = useState({
        current: "",
        newPass: "",
        confirm: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = e => {
        setPasswords({ ...passwords, [e.target.name]: e.target.value });
    };

    const handleUpdate = () => {
        if (passwords.newPass !== passwords.confirm) {
            setMessage("New password and confirm password do not match.");
            return;
        }

        if (passwords.newPass.length < 6) {
            setMessage("Password must be at least 6 characters.");
            return;
        }

        setMessage("Password updated successfully.");
    };

    return (
        <div className="security-page">
            <h1 className="security-heading">Security Settings</h1>

            <div className="security-card">

                <h2 className="section-title">Change Password</h2>

                {message && (
                    <div
                        className={
                            message.includes("successfully")
                                ? "success-box"
                                : "error-box"
                        }
                    >
                        {message}
                    </div>
                )}

                <label className="input-label">Current Password</label>
                <input
                    type="password"
                    name="current"
                    value={passwords.current}
                    onChange={handleChange}
                    className="input-field"
                />

                <label className="input-label">New Password</label>
                <input
                    type="password"
                    name="newPass"
                    value={passwords.newPass}
                    onChange={handleChange}
                    className="input-field"
                />

                <label className="input-label">Confirm Password</label>
                <input
                    type="password"
                    name="confirm"
                    value={passwords.confirm}
                    onChange={handleChange}
                    className="input-field"
                />

                <button className="update-btn" onClick={handleUpdate}>
                    Update Password
                </button>
            </div>
        </div>
    );
}
