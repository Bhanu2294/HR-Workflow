import { Handle, Position } from "reactflow";

export default function TaskNode({ data }) {
  return (
    <div style={{
      padding: 10,
      border: "2px solid #007bff",
      borderRadius: 8,
      background: "white"
    }}>
      <Handle type="target" position={Position.Top} />
      
      📋 <strong>{data.label || "Task"}</strong>
      
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}