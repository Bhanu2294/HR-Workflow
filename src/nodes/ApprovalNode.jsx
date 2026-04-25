import { Handle, Position } from "reactflow";
import tick from "../assets/successIcon.svg";

export default function ApprovalNode({ data }) {
  return (
    <div
      style={{
        padding: 10,
        border: "2px solid orange",
        borderRadius: 8,
        background: "white"
      }}
    >
      <Handle type="target" position={Position.Top} />

      {/* 🔥 FIXED ALIGNMENT */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8
        }}
      >
        <img
          src={tick}
          alt="Approval"
          style={{
            width: 14,
            height: 14,
            display: "block"
          }}
        />
        <span>{data.label || "Approval"}</span>
      </div>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}