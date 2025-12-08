import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function DashboardLayout() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");


    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div style={{ display: "flex", height: "100vh", background: "transparent" }}>


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
                <div>
                    <h2 style={{ marginBottom: "70px", fontWeight: "bold" ,fontSize:"2rem"}}>Gemini Faculty Companion</h2>

                    <nav style={{ lineHeight: "5rem", fontSize: "1.5rem",fontWeight:"bold" }}>
                        <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>Dashboard</Link><br />
                        <Link to="/courses" style={{ color: "white", textDecoration: "none" }}>Courses</Link><br />
                        <Link to="/accomplishments" style={{ color: "white", textDecoration: "none" }}>Accomplishments</Link><br />
                        <Link to="/community" style={{ color: "white", textDecoration: "none" }}>Community</Link><br />
                        <Link to="/help" style={{ color: "white", textDecoration: "none" }}>Help</Link><br />
                        {/* <Link to="/certificates" style={{ color: "white", textDecoration: "none" }}>Certificates</Link> */}
                        
                    </nav>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <button
                    onClick={logout}
                    style={{
                        marginBottom: "10px",
                        padding : "15px",
                        background: "#2563eb",
                        borderRadius: "10px",
                        border: "none",
                        color: "white",
                        cursor: "pointer",
                        fontSize: "1.5rem"
                    }}
                >
                    Logout
                </button>
            </aside>

                <main style={{ 
                    flex: 1, 
                    background: "transparent", 
                    marginLeft: "300px", 
                    minHeight: "100vh", 
                    paddingBottom: "40px",
                    position: "relative",
                    zIndex: 10
                }}>




                <header
    style={{
        height: "100px",
        background: "#b3ccd8ff",
        backdropFilter: "blur(8px)",
        zIndex: 5,
        display: "flex",
        justifyContent: "space-between",   // ⭐ left and right separation
        alignItems: "center",
        padding: "0 25px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.12)"
    }}
>

                   <div
    style={{
        display: "flex",
        justifyContent: "center", /* This centers the content horizontally */
        alignItems: "center",
        width: "100%", /* Ensure the div spans the full width to center effectively */
    }}
>
    <input
        type="text"
        placeholder="Search • Courses, FAQs, Topics"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
            width: "500px",
            padding: "12px 18px",
            borderRadius: "25px",
            border: "1px solid #ccc",
            fontSize: "16px",
            outline: "none",
            boxShadow: "0 2px 5px rgba(0,0,0,0.12)",
            transition: "0.2s"
        }}
        onFocus={(e) => (e.target.style.border = "1px solid #2563eb")}
        onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
    />
</div>


<img
    src="/profile-icon.png"
    alt="Profile"
    style={{ width: "45px", height: "45px", cursor: "pointer" }}
    onClick={() => setOpen(!open)}
/>

                    {open && (
                        <div style={{
                            position: "absolute",
                            top: "70px",
                            right: "25px",
                            background: "white",
                            borderRadius: "8px",
                            border: "1px solid #ddd",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                            padding: "10px",
                            width: "160px",
                            zIndex: 20
                        }}>
                            <Link to="/profile" onClick={() => setOpen(false)} style={{ display: "block", padding: "8px", textDecoration: "none", color: "#111", fontSize:"24px" }}>Profile</Link>
                            <Link to="/security" onClick={() => setOpen(false)} style={{ display: "block", padding: "8px", textDecoration: "none", color: "#111",fontSize:"24px"  }}>Security</Link>
                            <Link to="/accessibility" onClick={() => setOpen(false)} style={{ display: "block", padding: "8px", textDecoration: "none", color: "#111",fontSize:"24px"  }}>Accessibility</Link>
                            <Link to="/notifications" onClick={() => setOpen(false)} style={{ display: "block", padding: "8px", textDecoration: "none", color: "#111",fontSize:"24px"  }}>Notifications</Link>
                            {/* <Link to="/notifications-center" style={{ padding: "6px" }}>Notifications</Link> */}
                            {/* <Link to="/settings" style={{ padding: "6px" }}>Settings</Link> */}

                            <button
                                onClick={logout}
                                style={{
                                    padding: "8px",
                                    background: "none",
                                    fontSize:"24px" ,
                                    fontWeight:"400",
                                    border: "none",
                                    color: "#ff3333",
                                    cursor: "pointer",
                                    width: "100%",
                                    textAlign: "left"
                                }}
                            >Logout</button>
                        </div>
                    )}
                </header>

                <section style={{ padding: "30px", background: "transparent" }}>
                    <Outlet />
                </section>

            </main>
        </div>
    );
}

export default DashboardLayout;
