import React from "react";

export default function NotificationsCenter() {

    const notifications = [
        { id: 1, title: "Course Reminder", text: "Complete Module 3 today", time: "2 hours ago" },
        { id: 2, title: "Certificate Earned", text: "You earned AI Basics certificate", time: "1 day ago" },
        { id: 3, title: "Community Reply", text: "Someone replied to your post", time: "3 days ago" }
    ];

    return (
        <div>
            <h1 style={{ marginBottom: "20px" }}>Notifications</h1>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {notifications.map(n => (
                    <div key={n.id} style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "12px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                    }}>
                        <h3>{n.title}</h3>
                        <p style={{ marginTop: "8px", color: "#555" }}>{n.text}</p>
                        <span style={{ fontSize: ".9rem", color: "#777" }}>{n.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
