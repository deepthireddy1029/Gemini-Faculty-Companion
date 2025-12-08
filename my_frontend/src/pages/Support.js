import React, { useState } from "react";

export default function Support() {
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = () => {
        if (!subject.trim() || !description.trim()) return;
        setShowPopup(true);
        setSubject("");
        setDescription("");
    };

    return (
        <div style={styles.page}>

            <h1 style={styles.heading}>Create Support Ticket</h1>

            <div style={styles.card}>

                {/* FIXED INPUT SPACING */}
                <input
                    style={styles.input}
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />

                <textarea
                    style={styles.textarea}
                    placeholder="Describe your issue..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                {/* BUTTON WITH BOX SHADOW + HOVER */}
                <button
                    onClick={handleSubmit}
                    style={styles.btn}
                >
                    Submit Ticket
                </button>

            </div>

            {showPopup && (
                <div style={styles.popupOverlay}>
                    <div style={styles.popup}>
                        <h3>Support Ticket Submitted</h3>
                        <p>Your issue has been logged. We will contact you soon.</p>

                        <button
                            onClick={() => setShowPopup(false)}
                            style={styles.closeBtn}
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
        minHeight: "100vh",
        background: "linear-gradient(135deg, #dde3f7, #f1e4ff, #ddf4e4, #ecfeff)",
        padding: "40px 60px",
        overflow: "hidden"
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
        marginLeft: "10px",
    },

    // FIXED: input not touching edges + hover effect
    input: {
        width: "100%",
        padding: "10px",
        borderRadius: "10px",
        border: "1px solid #ccc",
        marginBottom: "15px",
        fontSize: "1rem",
        transition: "0.2s",
    },

    textarea: {
        width: "98%",
        height: "140px",
        padding: "14px",
        borderRadius: "10px",
        border: "1px solid #ccc",
        marginBottom: "15px",
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

// Hover effects must be added separately (React inline does not support :hover)
document.addEventListener("mouseover", function (e) {
    if (e.target.style && e.target.style.transition) {
        if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
            e.target.style.borderColor = "#2563eb";
        }
        if (e.target.tagName === "BUTTON") {
            e.target.style.transform = "scale(1.03)";
        }
    }
});

document.addEventListener("mouseout", function (e) {
    if (e.target.style && e.target.style.transition) {
        if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
            e.target.style.borderColor = "#ccc";
        }
        if (e.target.tagName === "BUTTON") {
            e.target.style.transform = "scale(1)";
        }
    }
});
