export default function NodePanel({ node, updateNode}) {
  if (!node) {
    return (
      <div
        style={{
          width: 250,
          padding: 10,
          borderLeft: "1px solid #ccc",
          background: "#fafafa"
        }}
      >
        <h4>No Node Selected</h4>
        <p>Click a node to edit</p>

        
      </div>
    );
  }

  const handleChange = (key, value) => {
    updateNode(node.id, { [key]: value });
  };

  return (
    <div
      style={{
        width: 250,
        padding: 10,
        borderLeft: "1px solid #ccc",
        background: "#fafafa"
      }}
    >
      <h3>{node.type.toUpperCase()} NODE</h3>

      {/* Title */}
      <input
        style={{ width: "100%", marginBottom: 10 }}
        value={node.data?.label || ""}
        onChange={(e) => handleChange("label", e.target.value)}
      />

      {/* TASK */}
      {node.type === "task" && (
        <>
          <input
            placeholder="Assignee"
            value={node.data?.assignee || ""}
            onChange={(e) => handleChange("assignee", e.target.value)}
          />
          <input
            placeholder="Due Date"
            value={node.data?.dueDate || ""}
            onChange={(e) => handleChange("dueDate", e.target.value)}
          />
        </>
      )}

      {/* APPROVAL */}
      {node.type === "approval" && (
        <>
          <input
            placeholder="Role"
            value={node.data?.role || ""}
            onChange={(e) => handleChange("role", e.target.value)}
          />
        </>
      )}

      {/* AUTO */}
      {node.type === "auto" && (
        <>
          <input
            placeholder="Action"
            value={node.data?.action || ""}
            onChange={(e) => handleChange("action", e.target.value)}
          />
        </>
      )}

      {/* END */}
      {node.type === "end" && (
        <>
          <input
            placeholder="Message"
            value={node.data?.message || ""}
            onChange={(e) => handleChange("message", e.target.value)}
          />
        </>
      )}

    </div>
  );
}