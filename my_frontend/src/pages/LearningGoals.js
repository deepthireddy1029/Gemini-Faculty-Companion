import React, { useState } from "react";

export default function LearningGoals() {

    const [goals, setGoals] = useState([
        "Complete Gemini LTI course",
        "Finish NotebookLM practice test"
    ]);

    const [newGoal, setNewGoal] = useState("");

    const addGoal = () => {
        if (newGoal.trim().length === 0) return;
        setGoals([...goals, newGoal]);
        setNewGoal("");
    };

    return (
        <div>
            <h1 style={{ marginBottom: "20px" }}>My Learning Goals</h1>

            <div style={{
                background: "white",
                padding: "20px",
                borderRadius: "12px",
                marginBottom: "25px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                maxWidth: "650px"
            }}>
                <h3>Add New Goal</h3>
                <input
                    value={newGoal}
                    onChange={(e) => setNewGoal(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "12px",
                        marginTop: "10px",
                        borderRadius: "8px",
                        border: "1px solid #ccc"
                    }}
                    placeholder="Enter your goal..."
                />
                <button onClick={addGoal} style={{
                    marginTop: "12px",
                    padding: "12px 20px",
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer"
                }}>
                    Add Goal
                </button>
            </div>

            <h3>Your Goals</h3>
            {goals.map((g, i) => (
                <div key={i} style={{
                    background: "white",
                    padding: "15px",
                    marginBottom: "12px",
                    borderRadius: "10px",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                    maxWidth: "650px"
                }}>
                    {g}
                </div>
            ))}
        </div>
    );
}
