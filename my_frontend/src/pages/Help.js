import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Help() {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);

    const faqs = [
        {
            q: "How do I start a course?",
            a: "Go to the Courses page, select a course, and click Start Course."
        },
        {
            q: "Why are modules locked?",
            a: "You must complete each module’s quiz before unlocking the next one."
        },
        {
            q: "Where can I find certificates?",
            a: "Go to Accomplishments to view, download, and track all earned certificates."
        },
        {
            q: "How can I get help with using NotebookLM?",
            a: "Visit the course titled 'How to use NotebookLM effectively' for guided tutorials."
        }
    ];

    return (
        <div style={styles.page}>
            <h1 style={styles.heading}>Help & Support</h1>
            <p style={styles.subheading}>
                Find answers, explore resources, and reach out for assistance.
            </p>

            {/* FAQ List */}
            <div style={styles.faqContainer}>
                {faqs.map((faq, i) => (
                    <div
                        key={i}
                        style={styles.faqCard}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.03)";
                            e.currentTarget.style.boxShadow = "0px 12px 30px rgba(0,0,0,0.20)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.12)";
                        }}
                    >
                        <h3>{faq.q}</h3>
                        <p>{faq.a}</p>
                    </div>
                ))}
            </div>

            {/* Support Section */}
            <div style={styles.supportCard}>
                <h2 style={{ marginBottom: "10px" }}>Need More Help?</h2>
                <p style={{ marginBottom: "20px", color: "#444", fontSize: "1.05rem" }}>
                    Reach out to support or submit your feedback.
                </p>

                <div style={styles.buttonRow}>

                    {/* Create Support Ticket */}
                    <button
    onClick={() => navigate("/support")}
    style={styles.primaryButton}
    onMouseEnter={(e) => e.target.style.transform = "scale(1.07)"}
    onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
>
    Create Support Ticket
</button>

<button
    onClick={() => navigate("/feedback")}
    style={styles.secondaryButton}
    onMouseEnter={(e) => e.target.style.transform = "scale(1.07)"}
    onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
>
    Submit Feedback
</button>

                </div>
            </div>

        </div>
    );
}

/* STYLES */
const styles = {
    page: {
        minHeight: "100vh",
        padding: "40px",
        background: "linear-gradient(135deg, #dde3f7, #f1e4ff, #ddf4e4, #ecfeff)",
    },

    heading: {
        fontSize: "36px",
        fontWeight: "700",
        marginBottom: "10px",
    },

    subheading: {
        fontSize: "1.2rem",
        color: "#444",
        marginBottom: "30px",
    },

    faqContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    },

    faqCard: {
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
        transition: "0.25s",
    },

    supportCard: {
        marginTop: "40px",
        background: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
    },

    buttonRow: {
        display: "flex",
        gap: "20px",
        marginTop: "20px",
    },

    primaryButton: {
        padding: "14px 25px",
        background: "linear-gradient(90deg, #2563eb, #4f46e5)",
        border: "none",
        borderRadius: "10px",
        color: "white",
        cursor: "pointer",
        fontSize: "1.1rem",
        transition: "0.2s",
    },

    secondaryButton: {
        padding: "14px 25px",
        background: "linear-gradient(90deg, #10b981, #22c55e)",
        border: "none",
        borderRadius: "10px",
        color: "white",
        cursor: "pointer",
        fontSize: "1.1rem",
        transition: "0.2s",
    },

    popupBackground: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    popupBox: {
        background: "white",
        padding: "25px",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
    },

    closeBtn: {
        marginTop: "15px",
        padding: "10px 20px",
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "1rem",
    },
};
