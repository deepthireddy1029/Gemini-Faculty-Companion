
import React, { useState, useEffect } from "react";
import { formatTimeAgo } from "../utils/timeUtils";

export default function Community() {
    const userName =
        (localStorage.getItem("firstName") || "") +
        " " +
        (localStorage.getItem("lastName") || "");

    const [newPost, setNewPost] = useState("");
    const [posts, setPosts] = useState([]);
    const todayKey = "communityPosts_" + new Date().toISOString().slice(0,10);
const dailyCount = parseInt(localStorage.getItem(todayKey) || 0);

const canPost = dailyCount < 3;


    // Static posts from other faculty
    const staticPosts = [
        {
            id: "s1",
            author: "Dr. Kavitha",
            message: "How are you using Gemini to support student research?",
            time: Date.now() - 3600 * 1000 * 2,
            replies: []
        },
        {
            id: "s2",
            author: "Prof. Anand",
            message: "NotebookLM summaries are helping me design assignments faster.",
            time: Date.now() - 3600 * 1000 * 24,
            replies: []
        },
        {
            id: "s3",
            author: "Dr. Rakesh",
            message: "Anyone interested in collaborative AI workshops next month?",
            time: Date.now() - 3600 * 1000 * 48,
            replies: []
        }
    ];

    // Load user posts
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("communityPosts")) || [];
        // Ensure ids are strings
        saved.forEach(p => p.id = String(p.id));
        setPosts([...staticPosts, ...saved]);
    }, []);

    function incrementCommunityCount() {
    let count = parseInt(localStorage.getItem("communityPostsCount") || 0);
    count++;
    localStorage.setItem("communityPostsCount", count);
}


    const handlePost = () => {
    if (!canPost) return;

    if (!newPost.trim()) return;

    const post = {
        id: "u" + Date.now(),
        author: userName,
        message: newPost.trim(),
        time: Date.now(),
        replies: []
    };

    const saved = JSON.parse(localStorage.getItem("communityPosts")) || [];
    const updatedSaved = [...saved, post];

    // Save posts
    localStorage.setItem("communityPosts", JSON.stringify(updatedSaved));

    // Increase community count
    incrementCommunityCount();

    // Update daily limit
    localStorage.setItem(todayKey, dailyCount + 1);

    setPosts([...staticPosts, ...updatedSaved]);
    setNewPost("");
};


    const handleReply = (postId, replyText, closeReplyBox) => {
        if (!replyText.trim()) return;

        const updatedPosts = posts.map(p => {
            if (p.id === postId) {
                if (p.replies.length === 1) return p; // only 1 reply allowed

                return {
                    ...p,
                    replies: [
                        {
                            author: userName,
                            message: replyText.trim(),
                            time: Date.now()
                        }
                    ]
                };
            }
            return p;
        });

        // Save only user-created posts
        const userPostsOnly = updatedPosts.filter(p => String(p.id).startsWith("u"));
        localStorage.setItem("communityPosts", JSON.stringify(userPostsOnly));

        incrementCommunityCount();

        closeReplyBox();
        setPosts(updatedPosts);
    };

    return (
        <div style={styles.page}>
            <h1>Community</h1>
            <p style={{ color: "#555", marginBottom: "20px" }}>
                Faculty discussions, ideas, and knowledge sharing.
            </p>

            {/* New Post Box */}
            <div style={box}>
    <textarea
        placeholder={
            canPost 
                ? "Share something with the community..." 
                : "You reached the limit of 3 posts today."
        }
        disabled={!canPost}
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        style={{
            ...textarea,
            background: canPost ? "white" : "#f0f0f0",
            cursor: canPost ? "text" : "not-allowed"
        }}
    ></textarea>

    <button 
        onClick={handlePost} 
        disabled={!canPost}
        style={{
            ...postBtn,
            background: canPost ? "#2563eb" : "gray",
            cursor: canPost ? "pointer" : "not-allowed"
        }}
    >
        Post
    </button>
</div>


            {/* Posts List */}
            {posts.map(post => (
                <PostCard
                    key={post.id}
                    post={post}
                    userName={userName}
                    handleReply={handleReply}
                />
            ))}
        </div>
    );
}

function PostCard({ post, userName, handleReply }) {
    const isUserPost = post.author === userName;

    const [showReplyBox, setShowReplyBox] = useState(false);
    const [replyText, setReplyText] = useState("");

    return (
        <div style={postBox}
        onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.18)";
    }}
    onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.12)";
    }}
        >
            <strong style={{ fontSize: "1.1rem" }}>{post.author}</strong>
            <p style={{ margin: "5px 0" }}>{post.message}</p>

            <p style={{ fontSize: ".9rem", color: "#777" }}>
                {formatTimeAgo(post.time)}
            </p>

            {/* Replies */}
            {post.replies.map((r, i) => (
                <div key={i} style={replyStyle}>
                    <strong>{r.author}</strong>
                    <p>{r.message}</p>
                    <p style={{ fontSize: ".8rem", color: "#777" }}>
                        {formatTimeAgo(r.time)}
                    </p>
                </div>
            ))}

            {/* Reply button only if: 
                - It is NOT the user's post 
                - Reply is not already done 
            */}
            {!isUserPost && post.replies.length === 0 && !showReplyBox && (
                <button style={replyBtnBlue} onClick={() => setShowReplyBox(true)}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
onMouseLeave={(e) => e.target.style.transform = "scale(1)"}

                >
                    Reply
                </button>
            )}

            {/* Show reply box when clicked */}
            {showReplyBox && (
    <div style={{ marginTop: "10px" }}>
        <textarea
            placeholder="Write a reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            style={{
                width: "100%",
                height: "60px",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc"
            }}
        />

        <div style={{ marginTop: "8px", display: "flex", gap: "10px" }}>
            <button
                onClick={() => handleReply(post.id, replyText, () => setShowReplyBox(false))}
                style={{
                    padding: "6px 14px",
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer"
                }}
            >
                Reply
            </button>

            <button
                onClick={() => setShowReplyBox(false)}
                style={{
                    padding: "6px 14px",
                    background: "#aaa",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer"
                }}
            >
                Cancel
            </button>
        </div>
    </div>
)}

        </div>
    );
}

/* Styles */
const box = {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    marginBottom: "25px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
    transition: "0.2s"
};

const styles = {
    page: {
        minHeight: "100vh",
        padding: "30px",
        background: "linear-gradient(135deg, #dde3f7, #f1e4ff, #ddf4e4, #ecfeff)",
        boxSizing: "border-box"
    }
};


const textarea = {
    width: "98%",
    height: "100px",
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #bbb",
    fontSize: "1.1rem",
    marginBottom: "10px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)"
};


const postBtn = {
    padding: "12px 22px",
    background: "linear-gradient(90deg, #2563eb, #4f46e5)",
    color: "white",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "0.2s"
};


const postBox = {
    background: "white",
    padding: "22px",
    borderRadius: "12px",
    marginBottom: "22px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
    transition: "0.25s",
    cursor: "pointer"
};


const replyStyle = {
    background: "#eef2ff",
    padding: "12px",
    borderRadius: "10px",
    marginTop: "12px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
};


const replyBtnBlue = {
    padding: "10px 20px",
    background: "linear-gradient(90deg, #2563eb, #4f46e5)",
    color: "white",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    marginTop: "12px",
    fontSize: "1rem",
    transition: "0.2s"
};


const replyTextarea = {
    width: "100%",
    height: "70px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginTop: "10px"
};

const replyBtn = {
    padding: "8px 18px",
    background: "green",
    color: "white",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer"
};

const cancelBtn = {
    padding: "8px 18px",
    background: "gray",
    color: "white",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer"
};
