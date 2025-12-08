import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function AdminLayout() {

    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <div style={{ display: "flex", height: "100vh", background: "transparent" }}>

            {/* SIDEBAR */}
            <aside style={{
                width: "250px",
                background: "#111827",
                padding: "25px",
                color: "white",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: 0,
                overflowY: "auto"
            }}>
                <h2 style={{ marginBottom: "70px", fontWeight: "bold", fontSize: "2rem" }}>
                    Gemini Faculty Companion
                </h2>

                <nav style={{ lineHeight: "5rem", fontSize: "1.5rem", fontWeight: "bold" }}>
                    <Link to="/admin" style={styles.link}>Overview</Link>
                    <Link to="/admin/faculty" style={styles.link}>Faculty</Link>
                    <Link to="/admin/reports" style={styles.link}>Reports</Link>
                </nav>

                <br /><br /><br /><br />

                <button
                    onClick={logout}
                    style={{
                        padding: "15px",
                        background: "#dc2626",
                        borderRadius: "10px",
                        border: "none",
                        color: "white",
                        cursor: "pointer",
                        fontSize: "1.5rem",
                        width: "100%"
                    }}
                >
                    Logout
                </button>
            </aside>

            {/* MAIN CONTENT AREA */}
            <main style={{
                flex: 1,
                background: "transparent",
                marginLeft: "300px",
                minHeight: "100vh",
                paddingBottom: "40px",
                position: "relative",
                zIndex: 10
            }}>

                {/* TOPBAR */}
                <header
                    style={{
                        height: "100px",
                        background: "#b3ccd8ff",
                        backdropFilter: "blur(8px)",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        padding: "0 25px",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.12)"
                    }}
                >
                    <img
                        src="/profile-icon.png"
                        alt="Admin"
                        style={{ width: "45px", height: "45px", cursor: "pointer" }}
                        onClick={() => setMenuOpen(!menuOpen)}
                    />

                    {menuOpen && (
    <div style={styles.dropdown}>
        <Link
            to="/admin/profile"
            style={{
                display: "block",
                padding: "8px",
                textDecoration: "none",
                color: "#111",
                fontSize: "22px"
            }}
            onClick={() => setMenuOpen(false)}
        >
            Profile
        </Link>

        <button
            onClick={logout}
            style={{
                padding: "8px",
                background: "none",
                border: "none",
                color: "#ff3333",
                cursor: "pointer",
                width: "100%",
                textAlign: "left",
                fontSize: "22px"
            }}
        >
            Logout
        </button>
    </div>
)}

                </header>

                {/* OUTLET CONTENT */}
                <section style={{ padding: "30px", background: "transparent" }}>
                    <Outlet />
                </section>

            </main>
        </div>
    );
}

const styles = {
    link: {
        display: "block",
        color: "white",
        marginBottom: "15px",
        textDecoration: "none",
        fontSize: "1.5rem"
    },
    dropdown: {
        position: "absolute",
        top: "90px",
        right: "25px",
        background: "white",
        borderRadius: "8px",
        border: "1px solid #ddd",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        padding: "10px",
        width: "160px",
        zIndex: 20
    },
    menuBtn: {
        padding: "8px",
        background: "none",
        border: "none",
        color: "#ff3333",
        cursor: "pointer",
        width: "100%",
        textAlign: "left",
        fontSize: "24px"
    }
};
