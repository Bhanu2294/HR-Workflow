import { Handle, Position } from "reactflow";
import auto from "../assets/auto.svg";
export default function AutoNode({ data }) {
  return (
    <div
      style={{
        padding: 10,
        border: "2px solid purple",
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
          src={auto}
          alt="Automation"
          style={{
            width: 14,
            height: 14,
            display: "block"
          }}
        />
        <span style={{ fontWeight: 500 }}>
          {data.label || "Automation"}
        </span>
      </div>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}