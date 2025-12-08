import React from "react";

export default function AdminCourseAnalytics() {

    const stats = [
        { course: "Gemini LTI", completed: 80 },
        { course: "NotebookLM", completed: 45 },
        { course: "AI Basics", completed: 102 }
    ];

    return (
        <div>
            <h1 style={{ marginBottom: "20px" }}>Course Analytics</h1>

            {stats.map((c, i) => (
                <div key={i} style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "12px",
                    marginBottom: "15px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                }}>
                    <h3>{c.course}</h3>
                    <p style={{ marginTop: "8px", color: "#555" }}>
                        Completed by {c.completed} faculty
                    </p>
                </div>
            ))}
        </div>
    );
}
