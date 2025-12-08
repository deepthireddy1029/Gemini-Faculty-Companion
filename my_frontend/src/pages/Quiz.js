import React, { useState } from "react";

export default function Quiz() {

    const questions = [
        {
            id: 1,
            question: "What is Gemini LTI used for?",
            options: [
                "AI enhancements in LMS",
                "Video editing",
                "Financial analysis"
            ]
        },
        {
            id: 2,
            question: "What is NotebookLM primarily for?",
            options: [
                "Research assistance",
                "Class scheduling",
                "Fee management"
            ]
        }
    ];

    const [selected, setSelected] = useState({});

    const handleSelect = (qid, option) => {
        setSelected({
            ...selected,
            [qid]: option
        });
    };

    return (
        <div>
            <h1 style={{ marginBottom: "20px" }}>Quiz</h1>

            <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
                {questions.map(q => (
                    <div
                        key={q.id}
                        style={{
                            background: "white",
                            padding: "20px",
                            borderRadius: "12px",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                        }}
                    >
                        <h3 style={{ marginBottom: "15px" }}>{q.question}</h3>

                        {q.options.map(opt => (
                            <label key={opt} style={{ display: "block", marginBottom: "10px" }}>
                                <input
                                    type="radio"
                                    name={`q-${q.id}`}
                                    checked={selected[q.id] === opt}
                                    onChange={() => handleSelect(q.id, opt)}
                                    style={{ marginRight: "10px" }}
                                />
                                {opt}
                            </label>
                        ))}
                    </div>
                ))}
            </div>

            <button
                style={{
                    marginTop: "30px",
                    padding: "15px 25px",
                    background: "#059669",
                    borderRadius: "8px",
                    border: "none",
                    color: "white",
                    fontSize: "1rem",
                    cursor: "pointer"
                }}
            >
                Submit Quiz
            </button>
        </div>
    );
}
