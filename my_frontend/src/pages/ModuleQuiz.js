import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ModuleQuiz() {

    const navigate = useNavigate();
    const { id, moduleId } = useParams();
    const currentModule = parseInt(moduleId);

    /* ------------------------------------------------------------------
       COURSE-WISE QUIZ BANK (5 medium questions each, 2 options, 1 correct)
    -------------------------------------------------------------------*/

    const quizBank = {
        1: [
            {
                q: "What is the main purpose of integrating Gemini LTI into the LMS?",
                options: ["To provide intelligent teaching tools", "To delete course modules"],
                correct: 0
            },
            {
                q: "Why does Gemini LTI require an authenticated LMS session?",
                options: ["To personalize AI responses using course context", "To block access to files"],
                correct: 0
            },
            {
                q: "Which benefit does Gemini LTI provide to faculty?",
                options: ["Automated insights for course tasks", "Offline-only grading"],
                correct: 0
            },
            {
                q: "What does LTI compliance ensure?",
                options: ["Secure communication between LMS and external tools", "Unlimited file uploads"],
                correct: 0
            },
            {
                q: "Which feature helps reduce repetitive faculty tasks?",
                options: ["AI-powered content generation", "Manual duplication of lessons"],
                correct: 0
            }
        ],

        2: [
            {
                q: "What improves the accuracy of Gemini's responses?",
                options: ["Providing clear and specific context", "Using random short prompts"],
                correct: 0
            },
            {
                q: "Why is iterative refinement useful?",
                options: ["It helps Gemini generate better results progressively", "It makes prompts invalid"],
                correct: 0
            },
            {
                q: "What should faculty include when asking Gemini to create assessments?",
                options: ["Learning objectives and difficulty levels", "Only student roll numbers"],
                correct: 0
            },
            {
                q: "How does Gemini improve productivity?",
                options: ["By structuring outputs according to instructions", "By restricting content creation"],
                correct: 0
            },
            {
                q: "What helps Gemini understand expected output format?",
                options: ["Including examples", "Avoiding structure"],
                correct: 0
            }
        ],

        3: [
            {
                q: "What is a key benefit of NotebookLM for academic use?",
                options: ["It synthesizes insights from uploaded documents", "It summarizes social media"],
                correct: 0
            },
            {
                q: "Why are source-grounded responses important?",
                options: ["They ensure answers come from uploaded files", "They allow fiction writing"],
                correct: 0
            },
            {
                q: "What should users verify when checking NotebookLM summaries?",
                options: ["Accuracy against original sources", "Font styles of the display"],
                correct: 0
            },
            {
                q: "How can NotebookLM support lesson planning?",
                options: ["By generating explanations and discussion prompts", "By grading exams"],
                correct: 0
            },
            {
                q: "What improves the reliability of NotebookLM output?",
                options: ["Uploading relevant, high-quality materials", "Uploading random unrelated documents"],
                correct: 0
            }
        ],

        4: [
            {
                q: "What is the most important element of a strong prompt?",
                options: ["Clear instructions with context", "Very long paragraphs without structure"],
                correct: 0
            },
            {
                q: "Why is specifying output format useful?",
                options: ["It structures the AI response", "It reduces answer quality"],
                correct: 0
            },
            {
                q: "What is the benefit of using role-based prompts?",
                options: ["It guides AI to respond from a defined expert view", "It causes random answers"],
                correct: 0
            },
            {
                q: "How do constraints improve prompt quality?",
                options: ["They reduce ambiguity in AI output", "They make AI ignore instructions"],
                correct: 0
            },
            {
                q: "When refining prompts, what should be adjusted first?",
                options: ["Missing context or unclear instructions", "The text color"],
                correct: 0
            }
        ]
    };

    // Load quiz based on course ID
    const questions = quizBank[id];

    const [index, setIndex] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [submitted, setSubmitted] = useState(false);

    const handleSelect = (choiceIndex) => {
        const updated = [...answers];
        updated[index] = choiceIndex;
        setAnswers(updated);
    };

    const submitQuiz = () => {
        setSubmitted(true);
    };

    const score = answers.filter((a, i) => a === questions[i].correct).length;

    const goNext = () => {
        if (currentModule < 6) {
            navigate(`/course/${id}/module/${currentModule + 1}`);
        } else {
            navigate(`/course/${id}/final-quiz`);
        }
    };

    return (
        <div style={styles.page}>

            <h1 style={styles.title}>Module {moduleId} Quiz</h1>

            {!submitted ? (
                <div style={styles.card}>

                    <div style={styles.counter}>
                        {index + 1} / {questions.length}
                    </div>

                    <h2 style={styles.question}>{questions[index].q}</h2>

                    {questions[index].options.map((opt, i) => (
                        <div
                            key={i}
                            onClick={() => handleSelect(i)}
                            style={{
                                ...styles.option,
                                background: answers[index] === i ? "#2563eb" : "#e5e7eb",
                                color: answers[index] === i ? "white" : "black"
                            }}
                        >
                            {opt}
                        </div>
                    ))}

                    <div style={{ marginTop: "25px" }}>
                        {index > 0 && (
                            <button onClick={() => setIndex(index - 1)} style={styles.btn}>
                                Previous
                            </button>
                        )}

                        {index < questions.length - 1 ? (
                            <button onClick={() => setIndex(index + 1)} style={styles.btn}>
                                Next
                            </button>
                        ) : (
                            <button onClick={submitQuiz} style={styles.btn}>
                                Submit Quiz
                            </button>
                        )}
                    </div>
                </div>
            ) : (
                <div style={styles.card}>
                    <h2>Quiz Completed</h2>
                    <p>Your Score: {score} / {questions.length}</p>

                    <h3>Correct Answers</h3>
                    <ul>
                        {questions.map((q, i) => (
                            <li key={i}>
                                {q.q} – <b>{q.options[q.correct]}</b>
                            </li>
                        ))}
                    </ul>

                    <button onClick={goNext} style={styles.btn}>
                        {currentModule < 6 ? "Continue to Next Module" : "Go to Final Quiz"}
                    </button>
                </div>
            )}
        </div>
    );
}

const styles = {
    page: {
        minHeight: "100vh",
        padding: "40px",
        background: "linear-gradient(135deg, #dde3f7, #f1e4ff, #ddf4e4, #ecfeff)"
    },

    title: {
        textAlign: "center",
        marginBottom: "25px",
        fontSize: "30px",
        fontWeight: "700"
    },

    card: {
        width: "60%",
        margin: "0 auto",
        background: "white",
        padding: "30px",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        position: "relative"
    },

    counter: {
        position: "absolute",
        top: "20px",
        right: "20px",
        fontSize: "18px",
        fontWeight: "700",
        color: "#333"
    },

    question: {
        marginBottom: "20px"
    },

    option: {
        padding: "12px",
        marginTop: "10px",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "0.2s"
    },

    btn: {
        padding: "12px 20px",
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        marginRight: "10px"
    }
};
