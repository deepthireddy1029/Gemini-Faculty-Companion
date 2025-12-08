import React, { useState } from "react";

export default function AdminSystemSettings() {

    const [maintenance, setMaintenance] = useState(false);
    const [announcement, setAnnouncement] = useState("");

    const save = () => {
        alert("System settings updated");
    };

    return (
        <div>
            <h1 style={{ marginBottom: "20px" }}>System Settings</h1>

            <div style={{
                background: "white",
                padding: "25px",
                borderRadius: "12px",
                maxWidth: "700px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
            }}>
                <label style={{ fontWeight: "bold" }}>Maintenance Mode</label>
                <select
                    value={maintenance}
                    onChange={(e) => setMaintenance(e.target.value)}
                    style={styles.input}
                >
                    <option value="false">Disabled</option>
                    <option value="true">Enabled</option>
                </select>

                <label style={{ fontWeight: "bold" }}>Global Announcement</label>
                <textarea
                    value={announcement}
                    onChange={(e) => setAnnouncement(e.target.value)}
                    style={styles.textarea}
                />

                <button onClick={save} style={styles.button}>
                    Save Settings
                </button>
            </div>
        </div>
    );
}

const styles = {
    input: {
        padding: "12px",
        width: "100%",
        borderRadius: "8px",
        border: "1px solid #ccc",
        marginBottom: "15px"
    },
    textarea: {
        padding: "12px",
        width: "100%",
        height: "120px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        resize: "none",
        marginBottom: "20px"
    },
    button: {
        padding: "12px 20px",
        background: "#2563eb",
        color: "white",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer"
    }
};
