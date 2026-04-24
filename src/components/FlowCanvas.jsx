import React, { useCallback, useMemo } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
  useReactFlow
} from "reactflow";
import "reactflow/dist/style.css";

import TaskNode from "../nodes/TaskNode";
import StartNode from "../nodes/StartNode";
import EndNode from "../nodes/EndNode";
import ApprovalNode from "../nodes/ApprovalNode";
import AutoNode from "../nodes/AutoNode";

export default function FlowCanvas({
  nodes,
  setNodes,
  edges,
  setEdges,
  setSelectedNode
}) {
  const { screenToFlowPosition } = useReactFlow();

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const NODE_WIDTH = 120;
  const NODE_HEIGHT = 40;

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");
      if (!type) return;

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY
      });

      const newNode = {
        id: Date.now().toString(),
        type,
        position: {
          x: position.x - NODE_WIDTH / 2,
          y: position.y - NODE_HEIGHT / 2
        },
        data: { label: `${type} node` }
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, setNodes]
  );

  const onNodeClick = (_, node) => {
    setSelectedNode(node);
  };

  const onNodesDelete = useCallback(
    (deleted) => {
      setNodes((nds) =>
        nds.filter((n) => !deleted.some((d) => d.id === n.id))
      );
    },
    [setNodes]
  );

  const onEdgesDelete = useCallback(
    (deleted) => {
      setEdges((eds) =>
        eds.filter((e) => !deleted.some((d) => d.id === e.id))
      );
    },
    [setEdges]
  );

  const nodeTypes = useMemo(
    () => ({
      task: TaskNode,
      start: StartNode,
      end: EndNode,
      approval: ApprovalNode,
      auto: AutoNode
    }),
    []
  );

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onNodeClick={onNodeClick}
        onNodesDelete={onNodesDelete}
        onEdgesDelete={onEdgesDelete}
        deleteKeyCode={["Backspace", "Delete"]}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}