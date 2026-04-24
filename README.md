# HR Workflow Designer

##  What this is

This project is a simple workflow builder designed for HR processes like onboarding, approvals, and automated steps. The idea was to create something that lets users visually design workflows instead of writing logic manually.

You can drag nodes onto a canvas, connect them, configure their details, and run a basic simulation to see how the flow behaves.

---

##  What I focused on

Instead of spending too much time on styling, I focused on:

* Making interactions smooth (drag, connect, edit)
* Keeping the code clean and modular
* Handling edge cases (like deleting nodes, invalid workflows)
* Building something that can scale if extended later

---

## Features

### 🔹 Visual Workflow Builder

* Drag and drop nodes onto the canvas
* Connect nodes to define flow
* Move and delete nodes easily

---

### 🔹 Different Node Types

* Start
* Task
* Approval
* Automated
* End

Each node behaves slightly differently and has its own configuration.

---

### 🔹 Dynamic Configuration Panel

* Click a node → edit its details
* Fields change based on node type
* Updates reflect instantly

---

### 🔹 Run Workflow (Simulation)

* Run button in sidebar
* Basic checks:

  * Must have a Start node
  * Must have an End node
  * Nodes should be connected
* Shows a simple execution log

---

### 🔹 Utility Features

* Clear entire canvas
* Node selection resets properly after deletion
* Icons added for better clarity

---

## How it’s structured

I tried to keep things simple and organized:

* `FlowCanvas.jsx` → Handles graph logic (drag, drop, connect)
* `Sidebar.jsx` → Node list + actions (Run, Clear)
* `NodePanel.jsx` → Editing node details
* `nodes/` → Custom node UI components
* `App.jsx` → Main state management

State is managed at the top level so everything stays in sync.

---

##  Tech used

* React (Vite)
* React Flow
* JavaScript

---

##  Running locally

```bash
npm install
npm run dev
```

---

##  Assumptions

* No backend was required, so everything is handled on the frontend
* Workflow execution is simulated (not actual processing)
* UI is kept simple to focus on functionality

---

##  If I had more time

I would improve this by:

* Adding save/load workflow (JSON)
* Better execution engine (actual graph traversal)
* Inline validation on nodes
* Undo/Redo functionality
* Cleaner UI with a design system

---

##  Final note

This project was a good exercise in handling interactive UIs and managing state across multiple components. I tried to keep the solution practical, readable, and easy to extend.

---
