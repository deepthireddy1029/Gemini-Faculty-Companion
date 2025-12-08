import React from "react";

export default function CourseProgress() {

    const modules = [
        { id: 1, name: "Module 1: AI Basics", progress: 100 },
        { id: 2, name: "Module 2: Gemini LTI", progress: 60 },
        { id: 3, name: "Module 3: NotebookLM", progress: 20 },
        { id: 4, name: "Module 4: AI in Teaching", progress: 0 }
    ];

    return (
        <div>
            <h1 style={{ marginBottom: "20px" }}>Course Progress</h1>

            <p style={{ marginBottom: "15px", color: "#666" }}>
                Track your progress for this course.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {modules.map(m => (
                    <div key={m.id} style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "12px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                    }}>
                        <h3>{m.name}</h3>

                        <div style={{
                            width: "100%",
                            height: "12px",
                            background: "#e5e7eb",
                            borderRadius: "6px",
                            marginTop: "10px"
                        }}>
                            <div style={{
                                width: `${m.progress}%`,
                                height: "100%",
                                background: "#2563eb",
                                borderRadius: "6px"
                            }}></div>
                        </div>

                        <p style={{ marginTop: "8px", color: "#444" }}>{m.progress}% completed</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
