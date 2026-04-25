import { Handle, Position } from "reactflow";
import greendot from "../assets/green_dot.svg";
export default function StartNode({ data }) {
  return (
    <div style={{
      padding: 10,
      border: "2px solid green",
      borderRadius: 20,
      background: "white"
    }}>
      <Handle type="target" position={Position.Top} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8
          }}
        >
        <img
          src={greendot}
          alt="Green Dot"
          style={{
            width: 12,
            height: 12
          }}
        />
        <span>{data.label || "Start"}</span>
        </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}