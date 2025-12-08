// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// export default function ResetPassword() {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   const [newPassword, setNewPassword] = useState("");
//   const [confirm, setConfirm] = useState("");

//   const handleReset = () => {
//     if (!newPassword.trim() || !confirm.trim()) {
//       alert("Please fill all fields.");
//       return;
//     }

//     if (newPassword !== confirm) {
//       alert("Passwords do not match.");
//       return;
//     }

//     alert("Password Updated Successfully!");
//     navigate("/login");
//   };

//   return (
//     <div style={styles.page}>
      
//       <div style={styles.topBar}>
//         <h2 style={styles.logo}>Silverleaf University</h2>
//         <button style={styles.homeBtn} onClick={() => navigate("/")}>
//           Home
//         </button>
//       </div>

//       <div style={styles.card}>
//         <h2 style={styles.heading}>Reset Password</h2>

//         <label style={styles.label}>New Password</label>
//         <input
//           type="password"
//           style={styles.input}
//           placeholder="Enter new password"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//         />

//         <label style={styles.label}>Confirm Password</label>
//         <input
//           type="password"
//           style={styles.input}
//           placeholder="Re-enter password"
//           value={confirm}
//           onChange={(e) => setConfirm(e.target.value)}
//         />

//         <button style={styles.btn} onClick={handleReset}>
//           Update Password
//         </button>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   page: {
//     minHeight: "100vh",
//     padding: "40px",
//     background: "linear-gradient(135deg, #c7d2fe, #fbcfe8, #bbf7d0, #bae6fd)",
//   },
//   topBar: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginBottom: "40px",
//   },
//   logo: {
//     color: "#fff",
//     fontSize: "26px",
//     fontWeight: "700",
//   },
//   homeBtn: {
//     background: "#fff",
//     padding: "8px 16px",
//     borderRadius: "8px",
//     cursor: "pointer",
//     border: "none",
//     fontWeight: "600",
//   },

//   card: {
//     width: "420px",
//     margin: "auto",
//     padding: "30px",
//     background: "white",
//     borderRadius: "14px",
//     boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
//   },

//   heading: {
//     textAlign: "center",
//     marginBottom: "20px",
//     fontSize: "24px",
//     fontWeight: "700",
//     color: "#1f2937",
//   },

//   label: {
//     fontWeight: "600",
//     marginBottom: "5px",
//     display: "block",
//     color: "#333",
//   },

//   input: {
//     width: "100%",
//     padding: "12px",
//     borderRadius: "8px",
//     border: "1px solid #ccc",
//     marginBottom: "15px",
//     fontSize: "15px",
//   },

//   btn: {
//     width: "100%",
//     padding: "12px",
//     background: "#2563eb",
//     color: "white",
//     borderRadius: "10px",
//     border: "none",
//     fontSize: "16px",
//     cursor: "pointer",
//     transition: "0.2s",
//   }
// };
