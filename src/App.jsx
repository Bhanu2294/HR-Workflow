import { useState, useEffect } from "react";
import { ReactFlowProvider } from "reactflow";

import FlowCanvas from "./components/FlowCanvas";
import Sidebar from "./components/Sidebar";
import NodePanel from "./components/NodePanel";

function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  // 🔄 Update node
  const updateNode = (id, newData) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          const updatedNode = {
            ...node,
            data: { ...node.data, ...newData }
          };
          setSelectedNode(updatedNode);
          return updatedNode;
        }
        return node;
      })
    );
  };

  // 🧠 Clear selected node if deleted
  useEffect(() => {
    if (!selectedNode) return;

    const exists = nodes.some((n) => n.id === selectedNode.id);
    if (!exists) {
      setTimeout(() => setSelectedNode(null), 0);
    }
  }, [nodes, selectedNode]);

  // ▶ Run Workflow
  const runWorkflow = () => {
    if (!nodes.some((n) => n.type === "start")) {
      alert("Workflow must have a Start node");
      return;
    }

    if (!nodes.some((n) => n.type === "end")) {
      alert("Workflow must have an End node");
      return;
    }

    if (edges.length === 0) {
      alert("Connect nodes before running");
      return;
    }

    const logs = nodes.map(
      (n) => `Executed ${n.type.toUpperCase()} - ${n.data?.label || ""}`
    );

    alert(logs.join("\n"));
  };
  const clearCanvas = () => {
  setNodes([]);
  setEdges([]);
  setSelectedNode(null);
};

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* 🟢 Sidebar with Run Button */}
      <Sidebar runWorkflow={runWorkflow} clearCanvas={clearCanvas} />

      {/* 🔥 IMPORTANT FIX: Provider wraps FlowCanvas */}
      <div style={{ flex: 1 }}>
        <ReactFlowProvider>
          <FlowCanvas
            nodes={nodes}
            setNodes={setNodes}
            edges={edges}
            setEdges={setEdges}
            setSelectedNode={setSelectedNode}
          />
        </ReactFlowProvider>
      </div>

      {/* 📝 Edit Panel */}
      <NodePanel
        node={selectedNode}
        updateNode={updateNode}
      />
    </div>
  );
}

export default App;