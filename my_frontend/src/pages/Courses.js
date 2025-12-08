import React from "react";
import { useNavigate } from "react-router-dom";

export default function Courses() {

    const navigate = useNavigate();

    const courses = [
        {
            id: 1,
            title: "Getting started with Gemini LTI",
            description: "Learn how to set up and use Gemini LTI inside your LMS."
        },
        {
            id: 2,
            title: "How to use Gemini effectively",
            description: "Master the core features of Gemini for daily teaching tasks."
        },
        {
            id: 3,
            title: "How to use NotebookLM effectively",
            description: "Learn NotebookLM for research and course planning."
        },
        {
            id: 4,
            title: "How to give good prompts",
            description: "Learn how to write powerful prompts for accurate results."
        }
    ];

    const getProgress = courseId => {
        let saved = localStorage.getItem(`course_${courseId}_progress`);
        if (!saved) return 0;

        let modulesCompleted = parseInt(saved);
        return Math.min(Math.round((modulesCompleted / 6) * 100), 100);
    };

    return (
        <div style={styles.page}>

            <h1 style={styles.heading}>Courses</h1>

            <div style={styles.grid}>
                {courses.map(course => {
                    const progress = getProgress(course.id);

                    return (
                        <div
                            key={course.id}
                            style={styles.card}

                            /* ⭐ HOVER EFFECT FOR CARD */
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = "scale(1.04)";
                                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.25)";
                                e.currentTarget.style.border = "2px solid rgba(90,99,241,0.4)";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.12)";
                                e.currentTarget.style.border = "none";
                            }}
                        >

                            <h2 style={styles.cardTitle}>{course.title}</h2>
                            <p style={styles.cardDesc}>{course.description}</p>

                            {progress > 0 && (
                                <>
                                    <div style={styles.progressBar}>
                                        <div style={{ ...styles.progressFill, width: `${progress}%` }}></div>
                                    </div>

                                    <p style={styles.progressText}>{progress}% completed</p>
                                </>
                            )}

                            <button
                                style={styles.button}

                                /* ⭐ HOVER EFFECT FOR BUTTON */
                                // onMouseEnter={e => {
                                //     e.currentTarget.style.transform = "scale(1.06)";
                                //     e.currentTarget.style.boxShadow = "0 8px 20px rgba(37,99,235,0.35)";
                                // }}
                                // onMouseLeave={e => {
                                //     e.currentTarget.style.transform = "scale(1)";
                                //     e.currentTarget.style.boxShadow = "none";
                                // }}

                                onClick={() => navigate(`/course/${course.id}`)}
                            >
                                {progress === 0 ? "Start Course" : "Resume Course"}
                            </button>

                        </div>
                    );
                })}
            </div>
        </div>
    );
}


/* ⭐ ALL STYLES HERE */
const styles = {
    page: {
        minHeight: "100vh",
        width: "100%",
        padding: "40px 80px",
        background: "linear-gradient(135deg, #dde3f7, #f1e4ff, #ddf4e4, #ecfeff)",
        color: "white",
        boxSizing: "border-box"
    },

    heading: {
        fontSize: "36px",
        fontWeight: "700",
        textAlign: "center",
        marginBottom: "40px",
        color: "#000000"
    },

    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "35px"
    },

    card: {
        background: "white",
        color: "#222",
        padding: "25px",
        borderRadius: "16px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
        transition: "0.3s ease",
        cursor: "pointer",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },

    cardTitle: {
        fontSize: "20px",
        fontWeight: "700",
        marginBottom: "10px"
    },

    cardDesc: {
        fontSize: "15px",
        color: "#555",
        marginBottom: "20px"
    },

    progressBar: {
        background: "#e6e6e6",
        height: "10px",
        borderRadius: "6px",
        overflow: "hidden",
        marginBottom: "10px"
    },

    progressFill: {
        height: "100%",
        background: "#4caf50"
    },

    progressText: {
        fontWeight: "bold",
        color: "#333",
        marginBottom: "15px"
    },

    button: {
        padding: "12px",
        background: "linear-gradient(90deg, #2563eb, #4f46e5)",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "15px",
        fontWeight: "600",
        transition: "0.25s ease"
    }
};
