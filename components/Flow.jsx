import { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
// 👇 you need to import the reactflow styles
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    position: { x: 40, y: 50 },
    data: { label: "Slide 1 - Lorem ipsum" },
  },
  {
    id: "2",
    position: { x: 55, y: 150 },
    data: { label: "Slide 2 - This is cool" },
  },
  {
    id: "3",
    position: { x: 25, y: 220 },
    data: { label: "Slide 2 - This is cool" },
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    data: { label: "Yes" },
    animated: true,
  },
];

function MyFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default MyFlow;
