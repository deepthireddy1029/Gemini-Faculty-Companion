import React from "react";

export default function SavedResources() {

    const resources = [
        { id: 1, title: "Gemini LTI Guide.pdf", type: "PDF" },
        { id: 2, title: "NotebookLM Tutorial", type: "Video" },
        { id: 3, title: "Teaching with AI Handbook", type: "Document" }
    ];

    return (
        <div>
            <h1 style={{ marginBottom: "20px" }}>Saved Resources</h1>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gap: "20px"
            }}>
                {resources.map(r => (
                    <div key={r.id} style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "12px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                    }}>
                        <h3>{r.title}</h3>
                        <p style={{ color: "#555", marginTop: "10px" }}>{r.type}</p>
                        <button style={styles.button}>Open</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    button: {
        marginTop: "15px",
        padding: "10px 16px",
        background: "#10b981",
        color: "white",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer"
    }
};
