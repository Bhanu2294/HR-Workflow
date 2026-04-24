import { Handle, Position } from "reactflow";
export default function AutoNode({ data }) {
  return (
    <div style={{
      padding: 10,
      border: "2px solid purple",
      borderRadius: 8,
      background: "white"
    }}>
      <Handle type="target" position={Position.Top} />
      ⚙️ {data.label || "Automation"}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}