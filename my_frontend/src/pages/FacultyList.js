import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FacultyList() {

    const [faculty, setFaculty] = useState([]);

    useEffect(() => {
        loadFaculty();
    }, []);

    const loadFaculty = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await axios.get(
                "http://localhost:8081/api/admin/faculty",
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setFaculty(res.data);

        } catch (err) {
            console.log("Error loading faculty list");
        }
    };

    return (
        <div>
            <h1>Faculty Monitoring</h1>

            <table style={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Progress</th>
                        <th>Certificates</th>
                    </tr>
                </thead>

                <tbody>
                    {faculty.map((f, idx) => (
                        <tr key={idx}>
                            <td>{f.name}</td>
                            <td>{f.email}</td>
                            <td>{f.progress}%</td>
                            <td>{f.certificates}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const styles = {
    table: {
        width: "100%",
        marginTop: "20px",
        background: "white",
        borderRadius: "10px",
        overflow: "hidden",
        borderCollapse: "collapse"
    }
};
