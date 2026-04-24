import { Handle, Position } from "reactflow";
import tick from "../assets/successIcon.svg";
export default function ApprovalNode({ data }) {
  return (
    <div style={{
      padding: 10,
      border: "2px solid orange",
      borderRadius: 8,
      background: "white"
    }}>
      <Handle type="target" position={Position.Top} />
      <img src={tick} alt="Green Dot" style={{ width: 20, height: 20, marginRight: 10 }} />
       {data.label || "Approval"}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}