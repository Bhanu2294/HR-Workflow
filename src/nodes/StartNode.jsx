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
      <img src={greendot} alt="Green Dot" style={{ width: 20, height: 20, marginRight: 10 }} />
      {data.label || "Start"}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}