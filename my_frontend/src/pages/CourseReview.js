import React, { useState } from "react";

export default function CourseReview() {

    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    const submit = () => {
        alert("Review submitted");
    };

    return (
        <div>
            <h1 style={{ marginBottom: "20px" }}>Course Review</h1>

            <div style={{
                background: "white",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                maxWidth: "700px"
            }}>

                <label style={{ fontWeight: "bold" }}>Rating</label>
                <select
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    style={styles.input}
                >
                    <option value="0">Select Rating</option>
                    <option value="1">1 star</option>
                    <option value="2">2 stars</option>
                    <option value="3">3 stars</option>
                    <option value="4">4 stars</option>
                    <option value="5">5 stars</option>
                </select>

                <label style={{ fontWeight: "bold" }}>Review</label>
                <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    style={styles.textarea}
                    placeholder="Write your review..."
                />

                <button style={styles.button} onClick={submit}>
                    Submit Review
                </button>
            </div>
        </div>
    );
}

const styles = {
    input: {
        width: "100%",
        padding: "12px",
        marginBottom: "15px",
        borderRadius: "8px",
        border: "1px solid #ccc"
    },
    textarea: {
        width: "100%",
        height: "140px",
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        resize: "none",
        marginBottom: "20px"
    },
    button: {
        padding: "12px 20px",
        background: "#059669",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer"
    }
};
