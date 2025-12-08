import React from "react";
import "../chartSetup";
import { Bar, Line, Pie, Radar } from "react-chartjs-2";
import "../styles/AdminReports.css";
const chartContainer = {
  marginBottom: "40px",
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
};
const grid2 = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
  marginTop: "20px"
};


export default function AdminReports() {
    return (
        <div style={styles.page} className="report-card">
            <h1 style={{ marginBottom: "20px" }}>Analytics and Reports</h1>

            <div style={styles.grid}>

                {/* 1. Average Course Completion */}
                <ChartCard title="Average Course Completion by Training Course">
                    <Bar
                        data={{
                            labels: [
                                "Prompting Strategies",
                                "NotebookLM",
                                "Use Gemini",
                                "Gemini LTI"
                            ],
                            datasets: [
                                {
                                    label: "Avg Completion %",
                                    data: [60.431, 58.276, 57.931, 56.552],
                                    backgroundColor: ["#6ab7b5", "#e57373", "#fb8c00", "#546e7a"]
                                }
                            ]
                        }}
                        options={chartOptions}
                    />
                </ChartCard>

                {/* 2. Certificates Issued Over Time */}
                <ChartCard title="Certificates Issued Over Time">
                    <Line
                        
                        data={{
                            labels: ["July", "August", "September", "October", "November"],
                            datasets: [
                                {
                                    label: "Gemini LTI",
                                    data: [3, 12, 13, 11, 14],
                                    borderColor: "#1e88e5",
                                    tension: 0.3
                                },
                                {
                                    label: "NotebookLM",
                                    data: [4, 11, 11, 22, 5],
                                    borderColor: "#fb8c00",
                                    tension: 0.3
                                },
                                {
                                    label: "Prompting",
                                    data: [1, 14, 21, 13, 8],
                                    borderColor: "#e53935",
                                    tension: 0.3
                                },
                                {
                                    label: "How to Use Gemini",
                                    data: [2, 14, 18, 27, 8],
                                    borderColor: "#26a69a",
                                    tension: 0.3
                                }
                            ]
                        }}
                        options={chartOptions}
                    />
                </ChartCard>

                {/* 3. Faculty Satisfaction Ratings */}
                <ChartCard title="Faculty Satisfaction Rating Distribution">
                    <Bar
                        
                        data={{
                            labels: ["7", "6", "8", "9", "5", "10", "4", "3"],
                            datasets: [
                                {
                                    label: "Responses",
                                    data: [73, 63, 48, 35, 27, 19, 13, 12],
                                    backgroundColor: "#546e7a"
                                }
                            ]
                        }}
                        options={chartOptions}
                    />
                </ChartCard>

                {/* 4. Discussion Activity */}
                <ChartCard title="Discussion Activity by Topic">
                    <Bar
                        
                        data={{
                            labels: [
                                "General Discussion", 
                                "Grading", 
                                "AI Tools", 
                                "Technical Issues", 
                                "Teaching Methods"
                            ],
                            datasets: [
                                {
                                    label: "Posts",
                                    data: [156, 149, 153, 144, 135],
                                    backgroundColor: "#00897b"
                                }
                            ]
                        }}
                        options={{
                            ...chartOptions,
                            indexAxis: "y"
                        }}
                    />
                </ChartCard>

                {/* 5. Faculty Count by Department */}
                <ChartCard title="Faculty Count by Department">
                    <Bar
                        
                        data={{
                            labels: [
                                "Social Sciences",
                                "Education",
                                "Health Sciences",
                                "Computer Science",
                                "Business",
                                "Engineering",
                                "Arts & Humanities"
                            ],
                            datasets: [
                                {
                                    label: "Faculty Count",
                                    data: [49, 45, 42, 40, 40, 37, 37],
                                    backgroundColor: "#455a64"
                                }
                            ]
                        }}
                        options={chartOptions}
                    />
                </ChartCard>

                <ChartCard title="Module Completion Patterns by Course">
    <Bar
        data={{
            labels: ["Module 1", "Module 2", "Module 3", "Module 4", "Module 5", "Module 6"],
            datasets: [
                {
                    label: "C001",
                    data: [56.552, 56.552, 56.552, 56.552, 56.552, 56.552],
                    backgroundColor: "#ef5350"
                },
                {
                    label: "C002",
                    data: [57.931, 57.931, 57.931, 57.931, 57.931, 57.931],
                    backgroundColor: "#fb8c00"
                },
                {
                    label: "C003",
                    data: [58.276, 58.276, 58.276, 58.276, 58.276, 58.276],
                    backgroundColor: "#64b5f6"
                },
                {
                    label: "C004",
                    data: [60.431, 60.431, 60.431, 60.431, 60.431, 60.431],
                    backgroundColor: "#4caf50"
                }
            ]
        }}
        options={{
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: "bottom"
                }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }}
    />
</ChartCard>


                {/* 7. Average Quiz Score by Module */}
                <ChartCard title="Average Quiz Score by Module">
                    <Bar
                        
                        data={{
                            labels: [
                                "C002-M4",
                                "C004-M6",
                                "C004-M2",
                                "C001-M1",
                                "C002-M5",
                                "C002-M2",
                                "C002-M6"
                            ],
                            datasets: [
                                {
                                    label: "Avg Quiz Score",
                                    data: [78.424, 78.231, 77.907, 77.224, 77.124, 76.890, 76.655],
                                    backgroundColor: "#ff9800"
                                }
                            ]
                        }}
                        options={chartOptions}
                    />
                </ChartCard>

                {/* 8. Pie Chart – Certificate Distribution */}
                <ChartCard title="Certificates Distribution by Course">
                    <Pie
                        
                        data={{
                            labels: [
                                "Gemini LTI",
                                "NotebookLM",
                                "Prompting",
                                "Use Gemini"
                            ],
                            datasets: [
                                {
                                    label: "Certificates",
                                    data: [13, 11, 21, 18],
                                    backgroundColor: ["#1e88e5", "#fb8c00", "#e53935", "#26a69a"]
                                }
                            ]
                        }}
                    />
                </ChartCard>

                {/* 9. Line Chart – Monthly Faculty Engagement */}
                <ChartCard title="Monthly Faculty Engagement Trends">
                    <Line
                       
                        data={{
                            labels: ["July", "Aug", "Sept", "Oct", "Nov"],
                            datasets: [
                                {
                                    label: "Active Faculty",
                                    data: [45, 62, 74, 71, 69],
                                    borderColor: "#8e24aa",
                                    tension: 0.4
                                }
                            ]
                        }}
                        options={chartOptions}
                    />
                </ChartCard>

                {/* 10. Bar Chart – Average Time Spent Per Course */}
                <ChartCard title="Average Time Spent on Each Course (Hours)">
                    <Bar
                       
                        data={{
                            labels: [
                                "Gemini LTI",
                                "NotebookLM",
                                "Prompting",
                                "Use Gemini"
                            ],
                            datasets: [
                                {
                                    label: "Hours",
                                    data: [5.2, 6.1, 4.7, 5.8],
                                    backgroundColor: "#26c6da"
                                }
                            ]
                        }}
                        options={chartOptions}
                    />
                </ChartCard>

            </div>

            <h2 style={{ marginTop: "40px", marginBottom: "20px", fontWeight: "600" }} className="report-card">
  Predictive Analysis
</h2>


<div style={grid2}>

  {/* Chart 1 */}
  <div style={chartContainer}>
    <h3>Predicted Faculty Engagement Trend</h3>
    <Line
      data={{
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Predicted Engagement Score",
            data: [72, 75, 78, 82, 85, 89],
            borderColor: "#1E3A8A",
            backgroundColor: "rgba(30, 58, 138, 0.3)",
            tension: 0.4
          }
        ]
      }}
      options={{ responsive: true, plugins: { legend: { display: false } } }}
    />
  </div>

  {/* Chart 2 */}
  <div style={chartContainer}>
    <h3>Predicted Completion Probability</h3>
    <Bar
      data={{
        labels: ["Gemini LTI", "NotebookLM", "Prompting Strategies", "AI Basics"],
        datasets: [
          {
            label: "Completion Probability (%)",
            data: [86, 78, 91, 83],
            backgroundColor: ["#2563eb", "#10b981", "#f59e0b", "#ef4444"]
          }
        ]
      }}
      options={{ responsive: true, plugins: { legend: { display: false } } }}
    />
  </div>

  {/* Chart 3 */}
  <div style={chartContainer}>
    <h3>Predicted Certificate Distribution</h3>
    <Pie
      data={{
        labels: ["Gemini LTI", "Prompting Strategies", "NotebookLM", "AI Basics"],
        datasets: [
          {
            label: "Predicted Count",
            data: [120, 98, 75, 110],
            backgroundColor: ["#1E3A8A", "#16a34a", "#f43f5e", "#f59e0b"]
          }
        ]
      }}
    />
  </div>

  {/* Chart 4 */}
  <div style={chartContainer}>
    <h3>Future Faculty Skill Adoption</h3>
    <Radar
      data={{
        labels: [
          "Prompt Engineering",
          "AI Tools Usage",
          "NotebookLM",
          "Gemini LTI",
          "Assessment Design"
        ],
        datasets: [
          {
            label: "Predicted Skill Level",
            data: [88, 92, 74, 81, 85],
            backgroundColor: "rgba(30, 64, 175, 0.3)",
            borderColor: "#1E40AF"
          }
        ]
      }}
      options={{
        responsive: true,
        scales: { r: { suggestedMin: 40, suggestedMax: 100 } }
      }}
    />
  </div>

</div>




        </div>
    );
}
function ChartCard({ title, children }) {
    return (
        <div style={styles.card} className="report-card">
            <h3 style={styles.cardTitle}>{title}</h3>
            <div style={{ height: "260px" }}>
                {children}
            </div>
        </div>
    );
}



const styles = {
    page: {
        minHeight: "100vh",
        padding: "30px",
        background: "linear-gradient(135deg, #dde3f7, #f1e4ff, #ddf4e4, #ecfeff)",
        boxSizing: "border-box"
    },

    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "30px",
        marginBottom: "40px"
    },

    card: {
        background: "white",
        padding: "25px",
        borderRadius: "16px",
        boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
        transition: "0.3s ease",
        cursor: "pointer"
    },

    cardTitle: {
        marginBottom: "15px",
        fontSize: "18px",
        fontWeight: "600",
        color: "#222"
    }
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        legend: { display: false }
    },
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

const radarOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: { legend: { position: "bottom" } }
};
