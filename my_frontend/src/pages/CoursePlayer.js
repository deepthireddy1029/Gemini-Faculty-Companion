import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function CoursePlayer() {

    const { id, moduleId } = useParams();
    const navigate = useNavigate();

    const courseTitles = {
        1: "Getting started with Gemini LTI",
        2: "How to use Gemini effectively",
        3: "How to use NotebookLM effectively",
        4: "How to give good prompts"
    };

    const modules = [
        { id: 1, title: "Introduction to the course" },
        { id: 2, title: "Understanding the basics" },
        { id: 3, title: "Video lesson" },
        { id: 4, title: "Practical exercise" },
        { id: 5, title: "Advanced concepts" },
        { id: 6, title: "Summary and wrap-up" }
    ];

    const currentModule = parseInt(moduleId);
    const locked = (mId) => mId > currentModule;

    return (
        <div style={{ display: "flex", height: "100%", gap: "20px" }}>
            
            {/* LEFT SIDEBAR */}
            <div style={{
                width: "280px",
                padding: "20px",
                background: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
            }}>
                <h2 style={{ marginBottom: "20px" }}>{courseTitles[id]}</h2>

                {modules.map((m) => (
                    <div
                        key={m.id}
                        onClick={() => {
                            if (!locked(m.id)) navigate(`/course/${id}/module/${m.id}`);
                        }}
                        style={{
                            padding: "12px",
                            marginBottom: "10px",
                            background: locked(m.id) ? "#e5e7eb" : "#2563eb",
                            color: locked(m.id) ? "#666" : "white",
                            borderRadius: "8px",
                            cursor: locked(m.id) ? "not-allowed" : "pointer",
                            opacity: locked(m.id) ? 0.6 : 1
                        }}
                    >
                        {m.title}
                    </div>
                ))}

                {/* Final Quiz */}
                <div
                    onClick={() => {
                        if (currentModule === 6) navigate(`/course/${id}/final-quiz`);
                    }}
                    style={{
                        padding: "12px",
                        marginTop: "20px",
                        background: currentModule === 6 ? "#059669" : "#e5e7eb",
                        color: currentModule === 6 ? "white" : "#666",
                        borderRadius: "8px",
                        cursor: currentModule === 6 ? "pointer" : "not-allowed",
                        textAlign: "center"
                    }}
                >
                    Final Quiz
                </div>
            </div>

            {/* RIGHT CONTENT AREA */}
            <div style={{ flex: 1, padding: "10px" }}>
                <h1>{modules[currentModule - 1].title}</h1>

                {/* VIDEO */}
                <h3 style={{ marginTop: "20px" }}>Video Lesson</h3>

                <video
                    width="100%"
                    height="380"
                    controls
                    style={{ borderRadius: "12px" }}
                >
                    <source src="/sample-video.mp4" type="video/mp4" />
                </video>

                {/* READING */}
                <h3 style={{ marginTop: "25px" }}>Reading Material</h3>
                <div style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "12px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                }}>
                    <p style={{ lineHeight: "1.6" }}>
                        This module contains important reading content. 
                        Please read everything before proceeding to the quiz.
                    </p>
                </div>

                {/* QUIZ BUTTON */}
                <button
                    onClick={() => navigate(`/course/${id}/module/${moduleId}/quiz`)}
                    style={{
                        marginTop: "25px",
                        padding: "14px 22px",
                        background: "#2563eb",
                        color: "white",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer"
                    }}
                >
                    Start Quiz
                </button>
            </div>
        </div>
    );
}
