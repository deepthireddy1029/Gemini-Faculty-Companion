import React from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate

export default function CourseModules() {
    // 2. Initialize useNavigate
    const navigate = useNavigate();

    const modules = [
        {
            id: 1,
            title: "Module 1: Understanding Gemini LTI",
            description: "Core concepts, setup, and integration fundamentals.",
            status: "completed"
        },
        {
            id: 2,
            title: "Module 2: Working with NotebookLM",
            description: "Creating notebooks, summarizing papers, and research workflows.",
            status: "in-progress"
        },
        {
            id: 3,
            title: "Module 3: AI for Course Design",
            description: "Using AI to plan lessons, generate content, and enhance learning.",
            status: "locked"
        }
    ];

    const statusColor = s => {
        if (s === "completed") return "#059669";
        if (s === "in-progress") return "#2563eb";
        return "#9ca3af";
    };

    return (
        <div>
            <h1 style={{ marginBottom: "20px" }}>Course Modules</h1>
            <p style={{ marginBottom: "30px", fontSize: "1.1rem", color: "#555" }}>
                Your learning modules for this course.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {modules.map(m => (
                    <div
                        key={m.id}
                        style={{
                            background: "white",
                            padding: "20px",
                            borderRadius: "12px",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                            borderLeft: `6px solid ${statusColor(m.status)}`
                        }}
                    >
                        <h2 style={{ marginBottom: "8px" }}>{m.title}</h2>
                        <p style={{ color: "#555", marginBottom: "12px" }}>{m.description}</p>

                        <span
                            style={{
                                padding: "6px 12px",
                                borderRadius: "6px",
                                background: statusColor(m.status),
                                color: "white",
                                fontSize: ".9rem"
                            }}
                        >
                            {m.status}
                        </span>
                    </div>
                ))}
            </div>

            {/* Start Quiz Button with Navigation */}
            <button
                onClick={() => navigate("/quiz")} // Add the navigation handler
                style={{
                    marginTop: "30px",
                    padding: "12px 25px",
                    background: "#4caf50", // A different color for the action button
                    borderRadius: "8px",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "1.05rem",
                    fontWeight: "bold"
                }}
            >
                Start Quiz
            </button>
        </div>
    );
}