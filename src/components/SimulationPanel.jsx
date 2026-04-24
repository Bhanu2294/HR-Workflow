import { useState } from "react";

export default function SimulationPanel({ nodes, edges }) {
  const [logs, setLogs] = useState([]);

  const runWorkflow = () => {
    // 🔍 Basic validation
    if (!nodes.some((n) => n.type === "start")) {
      alert("Workflow must have a Start node");
      return;
    }

    if (!nodes.some((n) => n.type === "end")) {
      alert("Workflow must have an End node");
      return;
    }

    if (edges.length === 0) {
      alert("Connect nodes before running");
      return;
    }

    // 🧠 Mock simulation (simple execution order)
    const executionLogs = nodes.map((node) => {
      return `Executed ${node.type.toUpperCase()} - ${node.data?.label || ""}`;
    });

    setLogs(executionLogs);
  };

  return (
    <div
      style={{
        position: "absolute",
        bottom: 20,
        left: 220,
        width: 300,
        background: "white",
        border: "1px solid #ccc",
        padding: 10,
        borderRadius: 8
      }}
    >
      <button
        onClick={runWorkflow}
        style={{
          width: "100%",
          padding: 8,
          marginBottom: 10,
          background: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        ▶ Run Workflow
      </button>

      <div style={{ maxHeight: 150, overflowY: "auto" }}>
        {logs.map((log, index) => (
          <div key={index} style={{ fontSize: 12 }}>
            {log}
          </div>
        ))}
      </div>
    </div>
  );
}