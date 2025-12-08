import React, { useState, useEffect } from "react";
import "../../styles/Profile.css";

export default function ProfileInfo() {

    const [profile, setProfile] = useState({
        firstName: "",
        lastName: "",
        email: "faculty@silverleaf.edu",
        designation: "Faculty Member",
        phone: "123-456-7890",
        gender: "Female",
        linkedin: "https://linkedin.com"
    });

    const [editing, setEditing] = useState(false);

    useEffect(() => {
        const fn = localStorage.getItem("firstName") || "";
        const ln = localStorage.getItem("lastName") || "";

        const savedProfile = {
            

            email: localStorage.getItem("email_profile") || "faculty@silverleaf.edu",
            designation: localStorage.getItem("designation_profile") || "Faculty Member",
            phone: localStorage.getItem("phone_profile") || "123-456-7890",
            gender: localStorage.getItem("gender_profile") || "Female",
            linkedin: localStorage.getItem("linkedin_profile") || "https://linkedin.com"
        };

        setProfile({
            ...profile,
            firstName: fn,
            lastName: ln,
            ...savedProfile
        });
    }, []);

    const handleSave = () => {
        localStorage.setItem("email_profile", profile.email);
        localStorage.setItem("designation_profile", profile.designation);
        localStorage.setItem("phone_profile", profile.phone);
        localStorage.setItem("gender_profile", profile.gender);
        localStorage.setItem("linkedin_profile", profile.linkedin);

        setEditing(false);
        alert("Profile updated successfully");
    };

    return (
        <div className="profile-page">
            <h1 className="profile-heading">Profile Information</h1>

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
