import { Handle, Position } from "reactflow";
import task from "../assets/task.svg";
export default function TaskNode({ data }) {
  return (
    <div
      style={{
        padding: 10,
        border: "2px solid #007bff",
        borderRadius: 8,
        background: "white"
      }}
    >
      <Handle type="target" position={Position.Top} />

      {/* 🔥 Aligned content */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8
        }}
      >
        <img
          src={task}
          alt="Task"
          style={{
            width: 14,
            height: 14,
            display: "block"
          }}
        />
        <span style={{ fontWeight: 500 }}>
          {data.label || "Task"}
        </span>
      </div>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}