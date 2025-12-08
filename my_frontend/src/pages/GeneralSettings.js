import React, { useState } from "react";

export default function GeneralSettings() {

    const [settings, setSettings] = useState({
        language: "English",
        timezone: "America/Chicago",
        autoSave: true
    });

    const update = e => {
        const { name, value, type, checked } = e.target;
        setSettings({ ...settings, [name]: type === "checkbox" ? checked : value });
    };

    return (
        <div>
            <h1 style={{ marginBottom: "20px" }}>General Settings</h1>

            <div style={{
                background: "white",
                padding: "25px",
                borderRadius: "12px",
                maxWidth: "600px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
            }}>

                <label style={{ fontWeight: "bold" }}>Language</label>
                <select name="language" value={settings.language} onChange={update} style={styles.input}>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>Hindi</option>
                </select>

                <label style={{ fontWeight: "bold" }}>Timezone</label>
                <select name="timezone" value={settings.timezone} onChange={update} style={styles.input}>
                    <option>America/Chicago</option>
                    <option>America/New_York</option>
                    <option>Asia/Kolkata</option>
                </select>

                <label style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px" }}>
                    <input
                        type="checkbox"
                        name="autoSave"
                        checked={settings.autoSave}
                        onChange={update}
                    />
                    Enable Autosave
                </label>

                <button style={styles.button}>Save Settings</button>
            </div>
        </div>
    );
}

const styles = {
    input: {
        width: "100%",
        padding: "12px",
        margin: "10px 0",
        borderRadius: "8px",
        border: "1px solid #ccc"
    },
    button: {
        marginTop: "20px",
        padding: "12px",
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer"
    }
};
