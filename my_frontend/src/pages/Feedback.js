import React, { useState } from "react";

export default function Feedback() {
    const [feedback, setFeedback] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = () => {
        if (!feedback.trim()) return;
        setShowPopup(true);
        setFeedback("");
    };

    return (
        <div style={styles.page}>

            <h1 style={styles.heading}>Submit Feedback</h1>

            <div style={styles.card}>

                {/* Feedback Textarea */}
                <textarea
                    placeholder="Write your feedback here..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    style={styles.textarea}
                ></textarea>

                {/* Submit Button */}
                <button
                    onClick={handleSubmit}
                    style={styles.btn}
                >
                    Submit Feedback
                </button>

            </div>

            {/* Popup */}
            {showPopup && (
                <div style={styles.popupOverlay}>
                    <div style={styles.popup}>
                        <h3>Feedback Submitted</h3>
                        <p>Thank you for your valuable feedback.</p>

                        <button
                            style={styles.closeBtn}
                            onClick={() => setShowPopup(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}

const styles = {
   page: {
    height: "100vh",                      // Not minHeight
    width: "100%",
    padding: "40px 60px",
    background: "linear-gradient(135deg, #dde3f7, #f1e4ff, #ddf4e4, #ecfeff)",
    boxSizing: "border-box",
    overflow: "hidden",                   // Prevent scroll bar
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",             // Left alignment
    justifyContent: "flex-start"          // No extra bottom space
},


    heading: {
        fontSize: "32px",
        marginBottom: "25px",
        fontWeight: "700",
        color: "#222",
        textAlign: "left",
        paddingLeft: "10px"
    },

    card: {
    width: "550px",
    padding: "30px",
    background: "white",
    borderRadius: "14px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
    margin: "0 0 0 10px"      // No vertical margin
},


    textarea: {
        width: "98%",
        height: "160px",
        padding: "14px",
        borderRadius: "10px",
        border: "1px solid #ccc",
        marginBottom: "20px",
        fontSize: "1rem",
        transition: "0.2s",
    },

    btn: {
        padding: "12px 26px",
        background: "#2563eb",
        color: "white",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
        fontSize: "1rem",
        boxShadow: "0 4px 12px rgba(37, 99, 235, 0.4)",
        transition: "0.2s",
    },

    popupOverlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    popup: {
        background: "white",
        padding: "30px",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
    },

    closeBtn: {
        marginTop: "15px",
        padding: "10px 22px",
        background: "#2563eb",
        color: "white",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
    }
};

// Hover effects for inputs, textarea, and button
document.addEventListener("mouseover", function (e) {
    if (e.target.style && e.target.style.transition) {
        if (e.target.tagName === "TEXTAREA") {
            e.target.style.borderColor = "#2563eb";
        }
        if (e.target.tagName === "BUTTON") {
            e.target.style.transform = "scale(1.03)";
        }
    }
});

document.addEventListener("mouseout", function (e) {
    if (e.target.style && e.target.style.transition) {
        if (e.target.tagName === "TEXTAREA") {
            e.target.style.borderColor = "#ccc";
        }
        if (e.target.tagName === "BUTTON") {
            e.target.style.transform = "scale(1)";
        }
    }
});
