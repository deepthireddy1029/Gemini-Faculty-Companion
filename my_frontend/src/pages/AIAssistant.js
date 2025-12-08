import React, { useState } from "react";

export default function AIAssistant() {

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (!input.trim()) return;

        setMessages([...messages, { from: "user", text: input }]);

        setTimeout(() => {
            setMessages(prev => [...prev, {
                from: "ai",
                text: "This is an AI generated response."
            }]);
        }, 500);

        setInput("");
    };

    return (
        <div style={styles.page}>
            <h1 style={styles.heading}>AI Assistant</h1>

            <div style={styles.chatBox}>
                {messages.map((m, i) => (
                    <div key={i} style={{
                        alignSelf: m.from === "user" ? "flex-end" : "flex-start",
                        background: m.from === "user" ? "#2563eb" : "#d1d5db",
                        color: m.from === "user" ? "white" : "black",
                        padding: "12px",
                        borderRadius: "10px",
                        maxWidth: "70%",
                        marginBottom: "10px"
                    }}>
                        {m.text}
                    </div>
                ))}
            </div>

            <div style={styles.inputBox}>
                <input
                    style={styles.input}
                    placeholder="Ask something..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button style={styles.sendButton} onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

const styles = {
    page: { display: "flex", flexDirection: "column", height: "100%" },
    heading: { marginBottom: "20px" },
    chatBox: {
        flex: 1,
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        overflowY: "auto",
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column"
    },
    inputBox: { display: "flex", gap: "10px" },
    input: {
        flex: 1,
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #ccc"
    },
    sendButton: {
        padding: "12px 20px",
        background: "#2563eb",
        borderRadius: "8px",
        color: "white",
        border: "none",
        cursor: "pointer"
    }
};
