import React, { useState, useEffect } from "react";
import "../../styles/Accessibility.css";

export default function AccessibilitySettings() {

    const [settings, setSettings] = useState({
        darkMode: false,
        largeText: false,
        highContrast: false,
        dyslexicFont: false
    });

    const [showPopup, setShowPopup] = useState(false);

    // Load saved settings from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("accessibilitySettings");
        if (saved) {
            const parsed = JSON.parse(saved);
            setSettings(parsed);
            applySettings(parsed);
        }
    }, []);

    // Apply settings to body
    const applySettings = (s) => {
        document.body.classList.toggle("dark-mode", s.darkMode);
        document.body.classList.toggle("large-text", s.largeText);
        document.body.classList.toggle("high-contrast", s.highContrast);
        document.body.classList.toggle("dyslexic-font", s.dyslexicFont);
    };

    const handleToggle = (name) => {
        const updated = { ...settings, [name]: !settings[name] };
        setSettings(updated);
        applySettings(updated);
    };

    const handleSave = () => {
        localStorage.setItem("accessibilitySettings", JSON.stringify(settings));
        setShowPopup(true);

        setTimeout(() => setShowPopup(false), 2000);
    };

    return (
        <div className="access-page">
            <h1 className="access-title">Accessibility Settings</h1>

            <div className="access-card">

                <h2 className="access-sub">Customize Your Experience</h2>

                {/* DARK MODE */}
                <div className="toggle-row">
                    <span>Dark Mode</span>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={settings.darkMode}
                            onChange={() => handleToggle("darkMode")}
                        />
                        <span className="slider"></span>
                    </label>
                </div>

                {/* LARGE TEXT */}
                <div className="toggle-row">
                    <span>Large Text</span>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={settings.largeText}
                            onChange={() => handleToggle("largeText")}
                        />
                        <span className="slider"></span>
                    </label>
                </div>

                {/* HIGH CONTRAST */}
                <div className="toggle-row">
                    <span>High Contrast Mode</span>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={settings.highContrast}
                            onChange={() => handleToggle("highContrast")}
                        />
                        <span className="slider"></span>
                    </label>
                </div>

                {/* DYSLEXIC FONT */}
                <div className="toggle-row">
                    <span>Dyslexia-Friendly Font</span>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={settings.dyslexicFont}
                            onChange={() => handleToggle("dyslexicFont")}
                        />
                        <span className="slider"></span>
                    </label>
                </div>

                {/* SAVE BUTTON */}
                <button className="save-btn" onClick={handleSave}>
                    Save Settings
                </button>

            </div>

            {/* POPUP */}
            {showPopup && (
                <div className="popup">
                    Settings updated successfully
                </div>
            )}
        </div>
    );
}
