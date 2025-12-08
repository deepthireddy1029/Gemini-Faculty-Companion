import React from "react";
import "../styles/Notifications.css";

export default function Notifications() {

    const notifications = [
        {
            id: 1,
            title: "Course Progress Update",
            text: "Your progress for 'Prompting Strategies' has been updated.",
            time: "2 hours ago"
        },
        {
            id: 2,
            title: "New Certificate Awarded",
            text: "Congratulations. You earned the 'Gemini LTI Fundamentals' certificate.",
            time: "1 day ago"
        },
        {
            id: 3,
            title: "Community Activity",
            text: "Dr. Kavitha replied to your discussion post.",
            time: "3 days ago"
        },
        {
            id: 4,
            title: "New Course Recommendation",
            text: "NotebookLM for Teaching is now recommended based on your activity.",
            time: "5 days ago"
        }
    ];

    return (
        <div className="notif-page">

            <h1 className="notif-title">Notifications</h1>

            <div className="notif-list">
                {notifications.map(n => (
                    <div key={n.id} className="notif-card">
                        <h3 className="notif-card-title">{n.title}</h3>
                        <p className="notif-card-text">{n.text}</p>
                        <span className="notif-time">{n.time}</span>
                    </div>
                ))}
            </div>

        </div>
    );
}
