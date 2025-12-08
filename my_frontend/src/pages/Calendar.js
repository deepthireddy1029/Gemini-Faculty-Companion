import React, { useState } from "react";

export default function Calendar() {

    const [events] = useState([
        { date: "2025-02-10", title: "Complete Module 2" },
        { date: "2025-02-12", title: "Faculty Meeting" },
        { date: "2025-02-15", title: "Course Quiz" }
    ]);

    return (
        <div>
            <h1 style={{ marginBottom: "20px" }}>Calendar & Schedule</h1>

            <div style={{
                background: "white",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                maxWidth: "650px"
            }}>
                {events.map((e, i) => (
                    <div key={i} style={{
                        padding: "12px",
                        borderBottom: "1px solid #eee"
                    }}>
                        <strong>{e.date}</strong>
                        <p style={{ marginTop: "6px" }}>{e.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
