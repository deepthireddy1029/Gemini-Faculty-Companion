// import React, { useState } from "react";
// import axios from "axios";

// export default function Register() {

//     const [form, setForm] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         designation: "",
//         phoneNumber: "",
//         gender: "",
//         uricId: ""   // ADMIN only
//     });

//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState("");

//     const ADMIN_URIC_IDS = ["ADM-UNI-2025", "ADM-12345", "ADM-001"]; // Allowed admin IDs

//     const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

//     const handleRegister = async (e) => {
//         e.preventDefault();
//         setError("");
//         setSuccess("");

//         let userRole = "FACULTY";

//         // If URIC ID matches admin list → make role ADMIN
//         if (form.uricId && ADMIN_URIC_IDS.includes(form.uricId.trim())) {
//             userRole = "ADMIN";
//         } else if (form.uricId && !ADMIN_URIC_IDS.includes(form.uricId.trim())) {
//             setError("Invalid Admin URIC ID");
//             return;
//         }

//         try {
//             await axios.post("http://localhost:8081/api/auth/register", {
//                 ...form,
//                 role: userRole,
//                 adminCode: form.uricId
//             });

//             setSuccess("Registration successful. You can now login.");

//         } catch (err) {
//             setError(err.response?.data?.error || "Registration failed");
//         }
//     };

//     return (
//         <div style={styles.page}>
//             <div style={styles.card}>
//                 <h1 style={styles.heading}>Create Account</h1>

//                 {error && <div style={styles.error}>{error}</div>}
//                 {success && <div style={styles.success}>{success}</div>}

//                 <form style={styles.form} onSubmit={handleRegister}>

//                     <input name="firstName" placeholder="First Name" onChange={handleChange} style={styles.input} />
//                     <input name="lastName" placeholder="Last Name" onChange={handleChange} style={styles.input} />

//                     <input name="email" type="email" placeholder="Email" onChange={handleChange} style={styles.input} />
//                     <input name="password" type="password" placeholder="Password" onChange={handleChange} style={styles.input} />
//                     <input name="designation" placeholder="Designation" onChange={handleChange} style={styles.input} />
//                     <input name="phoneNumber" placeholder="Phone Number" onChange={handleChange} style={styles.input} />

//                     <select name="gender" onChange={handleChange} style={styles.input}>
//                         <option value="">Gender</option>
//                         <option value="Female">Female</option>
//                         <option value="Male">Male</option>
//                     </select>

//                     <input
//                         name="uricId"
//                         placeholder="Admin URIC ID (Only for Admins)"
//                         onChange={handleChange}
//                         style={styles.input}
//                     />

//                     <button type="submit" style={styles.button}>Register</button>
//                 </form>

//                 <p style={styles.text}>
//                     Already have an account? <a href="/" style={styles.link}>Login</a>
//                 </p>
//             </div>
//         </div>
//     );
// }

// const styles = {
//     page: { minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#eaf0ff" },
//     card: { width: "380px", background: "white", padding: "35px", borderRadius: "12px", boxShadow: "0 4px 14px rgba(0,0,0,0.1)" },
//     heading: { textAlign: "center", marginBottom: "25px" },
//     form: { display: "flex", flexDirection: "column" },
//     input: { padding: "14px", marginBottom: "15px", borderRadius: "8px", border: "1px solid #ccc" },
//     button: { padding: "14px", background: "#10b981", borderRadius: "8px", color: "white", border: "none", cursor: "pointer" },
//     error: { background: "#ffdddd", padding: "10px", borderRadius: "5px", color: "red", marginBottom: "15px", textAlign: "center" },
//     success: { background: "#ddffdd", padding: "10px", borderRadius: "5px", color: "green", marginBottom: "15px", textAlign: "center" },
//     link: { color: "#2563eb", textDecoration: "none" },
//     text: { textAlign: "center", marginTop: "15px" }
// };


//UPdated code for both roles

// import React, { useState } from "react";
// import axios from "axios";

// export default function Register() {

//     const [form, setForm] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         designation: "",
//         phoneNumber: "",
//         gender: "",
//         role: "FACULTY", // default
//         adminCode: ""
//     });

//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState("");

//     const ADMIN_CODES = ["ADM-UNI-2025", "ADM-001", "ADM-987"]; // Add real codes later

//     const handleChange = e => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleRegister = async (e) => {
//         e.preventDefault();
//         setError("");
//         setSuccess("");

//         // If role = ADMIN, must enter valid unique ID
//         if (form.role === "ADMIN") {
//             if (!ADMIN_CODES.includes(form.adminCode.trim())) {
//                 setError("Invalid Admin Unique ID");
//                 return;
//             }
//         } else {
//             form.adminCode = null;
//         }

//         try {
//             await axios.post("http://localhost:8081/api/auth/register", form);
//             setSuccess("Registration completed. You may now login.");
//         } catch (err) {
//             setError(err.response?.data?.error || "Registration failed");
//         }
//     };

//     return (
//         <div style={styles.page}>
//             <div style={styles.card}>
//                 <h1 style={styles.heading}>Create Account</h1>

//                 {error && <div style={styles.error}>{error}</div>}
//                 {success && <div style={styles.success}>{success}</div>}

//                 <form style={styles.form} onSubmit={handleRegister}>

//                     <select
//                         name="role"
//                         style={styles.input}
//                         value={form.role}
//                         onChange={handleChange}
//                     >
//                         <option value="FACULTY">Faculty</option>
//                         <option value="ADMIN">Admin</option>
//                     </select>

//                     {form.role === "ADMIN" && (
//                         <input
//                             name="adminCode"
//                             placeholder="Enter Admin Unique ID"
//                             onChange={handleChange}
//                             style={styles.input}
//                         />
//                     )}

//                     <input name="firstName" placeholder="First Name" onChange={handleChange} style={styles.input} />
//                     <input name="lastName" placeholder="Last Name" onChange={handleChange} style={styles.input} />
//                     <input name="email" type="email" placeholder="Email" onChange={handleChange} style={styles.input} />
//                     <input name="password" type="password" placeholder="Password" onChange={handleChange} style={styles.input} />
//                     <input name="designation" placeholder="Designation" onChange={handleChange} style={styles.input} />
//                     <input name="phoneNumber" placeholder="Phone Number" onChange={handleChange} style={styles.input} />

//                     <select name="gender" onChange={handleChange} style={styles.input}>
//                         <option value="">Select Gender</option>
//                         <option value="Female">Female</option>
//                         <option value="Male">Male</option>
//                     </select>

//                     <button type="submit" style={styles.button}>Register</button>
//                 </form>

//                 <p style={styles.text}>
//                     Already have an account?
//                     <a href="/" style={styles.link}> Login</a>
//                 </p>
//             </div>
//         </div>
//     );
// }

// const styles = {
//     page: { minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#eef3ff" },
//     card: { width: "380px", background: "white", padding: "35px", borderRadius: "12px", boxShadow: "0 4px 14px rgba(0,0,0,0.1)" },
//     heading: { textAlign: "center", marginBottom: "25px" },
//     form: { display: "flex", flexDirection: "column" },
//     input: { padding: "14px", marginBottom: "15px", borderRadius: "8px", border: "1px solid #ccc" },
//     button: { padding: "14px", background: "#2563eb", borderRadius: "8px", color: "white", border: "none", cursor: "pointer" },
//     error: { background: "#ffdddd", padding: "10px", borderRadius: "5px", color: "red", marginBottom: "15px", textAlign: "center" },
//     success: { background: "#ddffdd", padding: "10px", borderRadius: "5px", color: "green", marginBottom: "15px", textAlign: "center" },
//     link: { color: "#2563eb", textDecoration: "none" },
//     text: { textAlign: "center", marginTop: "15px" }
// };

//updated based on backend
// import React, { useState } from "react";
// import axios from "axios";

// function Register() {

//     const [form, setForm] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         designation: "",
//         phoneNumber: "",
//         gender: "",
//         role: "FACULTY",
//         adminSecretId: ""
//     });

//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState("");

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleRegister = async (e) => {
//         e.preventDefault();
//         setError("");
//         setSuccess("");

//         try {
//             const res = await axios.post(
//                 "http://localhost:8081/api/auth/register",
//                 form
//             );

//             setSuccess(res.data);

//         } catch (err) {
//             setError(err.response?.data || "Registration failed");
//         }
//     };

//     return (
//         <div style={styles.container}>

//             <h1 style={styles.title}>Create Account</h1>

//             {error && <div style={styles.error}>{error}</div>}
//             {success && <div style={styles.success}>{success}</div>}

//             <form style={styles.form} onSubmit={handleRegister}>

//                 <input name="firstName" placeholder="First Name" style={styles.input} onChange={handleChange} />
//                 <input name="lastName" placeholder="Last Name" style={styles.input} onChange={handleChange} />
//                 <input name="email" placeholder="Email" type="email" style={styles.input} onChange={handleChange} />
//                 <input name="password" placeholder="Password" type="password" style={styles.input} onChange={handleChange} />
//                 <input name="designation" placeholder="Designation" style={styles.input} onChange={handleChange} />
//                 <input name="phoneNumber" placeholder="Phone Number" style={styles.input} onChange={handleChange} />

//                 <select name="gender" style={styles.input} onChange={handleChange}>
//                     <option value="">Select gender</option>
//                     <option value="Female">Female</option>
//                     <option value="Male">Male</option>
//                 </select>

//                 <select name="role" style={styles.input} onChange={handleChange}>
//                     <option value="FACULTY">Faculty</option>
//                     <option value="ADMIN">Admin</option>
//                 </select>

//                 {form.role === "ADMIN" && (
//                     <input
//                         name="adminSecretId"
//                         placeholder="Enter Admin Secret ID"
//                         style={styles.input}
//                         onChange={handleChange}
//                     />
//                 )}

//                 <button type="submit" style={styles.button}>Register</button>

//             </form>

//         </div>
//     );
// }

// const styles = {
//     container: {
//         width: "380px",
//         margin: "100px auto",
//         background: "#f4f4f4",
//         padding: "30px",
//         borderRadius: "10px"
//     },
//     title: { textAlign: "center", marginBottom: "20px" },
//     form: { display: "flex", flexDirection: "column" },
//     input: {
//         padding: "12px",
//         margin: "8px 0",
//         borderRadius: "5px",
//         border: "1px solid #bbb"
//     },
//     button: {
//         padding: "12px",
//         marginTop: "15px",
//         background: "#2563eb",
//         color: "white",
//         border: "none",
//         borderRadius: "6px",
//         cursor: "pointer"
//     },
//     error: {
//         background: "#ffdddd",
//         padding: "10px",
//         color: "red",
//         borderRadius: "5px",
//         marginBottom: "10px"
//     },
//     success: {
//         background: "#ddffdd",
//         padding: "10px",
//         color: "green",
//         borderRadius: "5px",
//         marginBottom: "10px"
//     }
// };

// export default Register;

import React, { useState } from "react";
import axios from "axios";
import "../styles/Register.css";

export default function Register() {

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        designation: "",
        phoneNumber: "",
        gender: "",
        role: "FACULTY",
        adminCode: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const ADMIN_CODES = ["ADM-UNI-2025", "ADM-001", "ADM-987"];

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (form.role === "ADMIN" && !ADMIN_CODES.includes(form.adminCode.trim())) {
            setError("Invalid Admin Unique ID");
            return;
        }

        const payload = {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            password: form.password,
            designation: form.designation,
            phoneNumber: form.phoneNumber,
            gender: form.gender,
            role: form.role
        };

        try {
            await axios.post("http://localhost:8081/api/auth/register", payload);
            setSuccess("Registration completed. You may now login.");
        } catch (err) {
            setError(err.response?.data?.error || "Registration failed");
        }
    };

    return (
        <div className="register-page">

            <div className="register-topbar">
                <h2 className="register-university">Silverleaf University</h2>

                <button className="home-btn" onClick={() => window.location.href = "/"}>
  Home
</button>

            </div>

            <h1 className="register-main-title">Gemini Faculty Companion</h1>

            <div className="register-card">
                <h2>Create Account</h2>

                {error && <div className="register-error">{error}</div>}
                {success && <div className="register-success">{success}</div>}

                <form onSubmit={handleRegister}>

                    <select
                        name="role"
                        className="register-input"
                        value={form.role}
                        onChange={handleChange}
                    >
                        <option value="FACULTY">Faculty</option>
                        <option value="ADMIN">Admin</option>
                    </select>

                    {form.role === "ADMIN" && (
                        <input
                            name="adminCode"
                            placeholder="Enter Admin Unique ID"
                            className="register-input"
                            onChange={handleChange}
                        />
                    )}

                    <input name="firstName" className="register-input" placeholder="First Name" onChange={handleChange} />
                    <input name="lastName" className="register-input" placeholder="Last Name" onChange={handleChange} />
                    <input name="email" type="email" className="register-input" placeholder="Email" onChange={handleChange} />
                    <input name="password" type="password" className="register-input" placeholder="Password" onChange={handleChange} />
                    <input name="designation" className="register-input" placeholder="Designation" onChange={handleChange} />
                    <input name="phoneNumber" className="register-input" placeholder="Phone Number" onChange={handleChange} />

                    <select name="gender" className="register-input" onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>

                    <button type="submit" className="register-btn">Register</button>
                </form>

                <p className="register-bottom-text">
                    Already have an account?
                    <a href="/login" className="register-link"> Login</a>
                </p>
            </div>
        </div>
    );
}



// const styles = {
//     page: { 
//         minHeight: "100vh",
//         width: "100%",
//         background: "linear-gradient(to bottom right, #5a63f1, #48b6ff)",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         paddingTop: "15px",
//         paddingBottom: "40px", // allows scrolling naturally
//         overflowY: "auto"
//     },

//     /* Top Bar */
//     topBar: {
//         width: "100%",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "25px 60px",
//         boxSizing: "border-box"
//     },

//     university: {
//         margin: 0,
//         fontSize: "32px",
//         fontWeight: "800",
//         letterSpacing: "1px",
        
//         color: "white"
//     },

//     homeButton: {
//         background: "white",
//         color: "#4c52f7",
//         border: "none",
//         padding: "12px 22px",
//         borderRadius: "10px",
//         cursor: "pointer",
//         fontSize: "16px",
//         fontWeight: "600",
//         transition: "0.3s"
//     },

//     homeButtonHover: {
//         background: "linear-gradient(to right, #ffffff, #dbe4ff)",
//         transform: "scale(1.05)"
//     },

//     /* Center container */
//     container: {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         marginTop: "5px"
//     },

//     mainHeading: {
//         fontSize: "38px",
//         fontWeight: "800",
//         color: "white",
//         marginBottom: "18px",
//         letterSpacing: "0.5px"
//     },

//     card: {
//         width: "380px",
//         background: "white",
//         padding: "35px",
//         borderRadius: "14px",
//         boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
//         animation: "fadeIn 0.6s ease"
//     },

//     heading: {
//         textAlign: "center",
//         marginBottom: "25px",
//         fontSize: "24px",
//         fontWeight: "600"
//     },

//     form: { display: "flex", flexDirection: "column" },

//     input: {
//         padding: "14px",
//         marginBottom: "15px",
//         borderRadius: "8px",
//         border: "1px solid #cbd5e1",
//         fontSize: "15px",
//         transition: "0.2s"
//     },

//     /* Input Hover */
//     inputHover: {
//         borderColor: "#4f46e5",
//         boxShadow: "0 0 8px rgba(79, 70, 229, 0.3)"
//     },

//     /* Submit button */
//     button: {
//         padding: "14px",
//         background: "linear-gradient(to right, #4f46e5, #6d5dfc)",
//         borderRadius: "8px",
//         color: "white",
//         border: "none",
//         cursor: "pointer",
//         fontSize: "16px",
//         fontWeight: "600",
//         transition: "0.3s"
//     },

//     /* Hover effect */
//     buttonHover: {
//         transform: "scale(1.05)",
//         background: "linear-gradient(to right, #6d5dfc, #8b74ff)"
//     },

//     error: {
//         background: "#ffe5e5",
//         padding: "10px",
//         borderRadius: "6px",
//         color: "#b91c1c",
//         marginBottom: "15px",
//         textAlign: "center"
//     },

//     success: {
//         background: "#ddffdd",
//         padding: "10px",
//         borderRadius: "6px",
//         color: "green",
//         marginBottom: "15px",
//         textAlign: "center"
//     },

//     text: {
//         textAlign: "center",
//         marginTop: "15px",
//         fontSize: "14px"
//     },

//     link: {
//         color: "#2563eb",
//         textDecoration: "none",
//         fontWeight: "600"
//     }
// };
