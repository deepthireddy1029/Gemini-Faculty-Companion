import React, { useState, useEffect } from "react";
import "../styles/Profile.css";

export default function AdminProfile() {

    const [profile, setProfile] = useState({
        firstName: "",
        lastName: "",
        email: "admin@silverleaf.edu",
        designation: "System Administrator",
        phone: "000-000-0000",
        gender: "Not Set",
        linkedin: "https://linkedin.com"
    });

    const [editing, setEditing] = useState(false);

    // Load existing admin profile data
    useEffect(() => {
        const saved = {
            firstName: localStorage.getItem("admin_firstName") || "",
            lastName: localStorage.getItem("admin_lastName") || "",
            email: localStorage.getItem("admin_email") || "admin@silverleaf.edu",
            designation: localStorage.getItem("admin_designation") || "System Administrator",
            phone: localStorage.getItem("admin_phone") || "000-000-0000",
            gender: localStorage.getItem("admin_gender") || "Not Set",
            linkedin: localStorage.getItem("admin_linkedin") || "https://linkedin.com"
        };

        setProfile(saved);
    }, []);

    const handleSave = () => {
        localStorage.setItem("admin_firstName", profile.firstName);
        localStorage.setItem("admin_lastName", profile.lastName);
        localStorage.setItem("admin_email", profile.email);
        localStorage.setItem("admin_designation", profile.designation);
        localStorage.setItem("admin_phone", profile.phone);
        localStorage.setItem("admin_gender", profile.gender);
        localStorage.setItem("admin_linkedin", profile.linkedin);

        setEditing(false);
        alert("Admin profile updated successfully");
    };

    return (
        <div className="profile-page">
            <h1 className="profile-heading">Admin Profile</h1>

            <div className="profile-card">

                <div className="profile-header">
                    <img src="/profile-icon.png" alt="profile" className="profile-avatar" />

                    <div>
                        <h2 className="profile-name">
                            {profile.firstName} {profile.lastName}
                        </h2>
                        <p className="profile-role">{profile.designation}</p>
                    </div>
                </div>

                <div className="profile-fields">

                    {[
                        ["First Name", "firstName"],
                        ["Last Name", "lastName"],
                        ["Email", "email"],
                        ["Designation", "designation"],
                        ["Phone Number", "phone"],
                        ["Gender", "gender"],
                        ["LinkedIn", "linkedin"]
                    ].map(([label, key]) => (
                        <div className="field-row" key={key}>
                            <strong>{label}:</strong>

                            {editing ? (
                                <input
                                    value={profile[key]}
                                    onChange={(e) =>
                                        setProfile({ ...profile, [key]: e.target.value })
                                    }
                                    className="edit-input"
                                />
                            ) : (
                                <span className="field-value">{profile[key]}</span>
                            )}
                        </div>
                    ))}

                </div>

                {!editing ? (
                    <button className="edit-btn" onClick={() => setEditing(true)}>
                        Edit Profile
                    </button>
                ) : (
                    <button className="save-btn" onClick={handleSave}>
                        Save Changes
                    </button>
                )}
            </div>
        </div>
    );
}
