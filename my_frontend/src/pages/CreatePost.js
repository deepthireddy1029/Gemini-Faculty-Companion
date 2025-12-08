import React, { useState } from "react";

export default function CreatePost() {

    const [post, setPost] = useState({
        title: "",
        content: ""
    });

    const handleChange = e => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const submitPost = () => {
        alert("Post created successfully");
    };

    return (
        <div>
            <h1 style={{ marginBottom: "20px" }}>Create New Post</h1>

            <div style={{
                background: "white",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                maxWidth: "700px"
            }}>
                <label style={{ fontWeight: "bold" }}>Title</label>
                <input
                    name="title"
                    style={styles.input}
                    value={post.title}
                    onChange={handleChange}
                />

                <label style={{ fontWeight: "bold" }}>Content</label>
                <textarea
                    name="content"
                    style={styles.textarea}
                    value={post.content}
                    onChange={handleChange}
                />

                <button style={styles.button} onClick={submitPost}>
                    Publish Post
                </button>
            </div>
        </div>
    );
}

const styles = {
    input: {
        width: "100%",
        padding: "12px",
        margin: "10px 0",
        borderRadius: "8px",
        border: "1px solid #ccc"
    },
    textarea: {
        width: "100%",
        height: "150px",
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        resize: "none",
        marginBottom: "20px"
    },
    button: {
        padding: "12px 20px",
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer"
    }
};
