import run from "../assets/run.svg";
import clear from "../assets/clear.svg";
export default function Sidebar({ runWorkflow, clearCanvas }) {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      style={{
        width: 200,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #ccc",
        background: "#f5f5f5"
      }}
    >
      <div style={{ padding: 10 }}>
        <h4>Nodes</h4>

        <div draggable onDragStart={(e) => onDragStart(e, "start")}>
         Start
        </div>

        <div draggable onDragStart={(e) => onDragStart(e, "task")}>
           Task
        </div>

        <div draggable onDragStart={(e) => onDragStart(e, "approval")}>
         Approval
        </div>

        <div draggable onDragStart={(e) => onDragStart(e, "auto")}>
           Auto
        </div>

        <div draggable onDragStart={(e) => onDragStart(e, "end")}>
           End
        </div>
      </div>

      <div
        style={{
          marginTop: "auto",
          padding: 10
        }}
      >
        <button
          onClick={runWorkflow}
          style={{
            width: "100%",
            padding: 10,
            background: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8
          }}
        >
          <img
            src={run}
            alt="Run"
            style={{ width: 14, height: 14 }}
          />
          <span>Run Workflow</span>
        </button>
        <button
          onClick={clearCanvas}
          style={{
            width: "100%",
            padding: 10,
            background: "#dc3545",
            color: "white",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginTop: 8
          }}
        >
          <img
            src={clear}
            alt="Clear"
            style={{ width: 14, height: 14 }}
          />
          <span>Clear Canvas</span>
        </button>
      </div>
    </div>
  );
}