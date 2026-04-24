import { Handle, Position } from "reactflow";
export default function EndNode({ data }) {
  return (
    <div style={{
      padding: 10,
      border: "2px solid red",
      borderRadius: 20,
      background: "white"
    }}>
      <Handle type="target" position={Position.Top} />
      🔴 {data.label || "End"}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}