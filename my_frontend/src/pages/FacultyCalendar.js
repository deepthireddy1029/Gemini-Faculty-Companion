import React from "react";

export default function FacultyCalendar() {

    const items = [
        { day: "Monday", task: "Complete Module 2" },
        { day: "Wednesday", task: "Attend Workshop" },
        { day: "Friday", task: "Submit Quiz" }
    ];

    return (
        <div>
            <h1 style={{ marginBottom: "20px" }}>My Schedule</h1>

            {items.map((i, idx) => (
                <div key={idx} style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "12px",
                    marginBottom: "15px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                }}>
                    <h3>{i.day}</h3>
                    <p style={{ color: "#555", marginTop: "8px" }}>{i.task}</p>
                </div>
            ))}
        </div>
    );
}
