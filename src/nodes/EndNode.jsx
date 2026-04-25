import { Handle, Position } from "reactflow";
import reddot from "../assets/reddot.svg";
export default function EndNode({ data }) {
  return (
    <div
      style={{
        padding: 10,
        border: "2px solid red",
        borderRadius: 20,
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
          src={reddot}
          alt="End"
          style={{
            width: 14,
            height: 14,
            display: "block"
          }}
        />
        <span style={{ fontWeight: 500 }}>
          {data.label || "End"}
        </span>
      </div>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}