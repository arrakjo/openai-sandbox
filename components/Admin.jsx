import React, { useRef, useState } from "react";

const Admin = () => {
  // Create a ref to the container element
  const containerRef = useRef(null);

  // State to track the position of the fields
  const [fields, setFields] = useState([
    { id: "field1", x: 50, y: 80 },
    { id: "field2", x: 60, y: 100 },
  ]);

  // State to track the currently dragged field
  const [draggedField, setDraggedField] = useState(null);

  // Event handler for when a field is dragged
  const handleFieldDrag = (fieldId, event) => {
    // Get the container and field element sizes
    const containerRect = containerRef.current.getBoundingClientRect();
    const fieldRect = event.currentTarget.getBoundingClientRect();

    // Calculate the new position of the dragged field
    const newX = event.clientX - containerRect.x - fieldRect.width / 2;
    const newY = event.clientY - containerRect.y - fieldRect.height / 2;

    // Update the position of the dragged field
    setFields(
      fields.map((field) => {
        if (field.id === fieldId) {
          return {
            ...field,
            x: newX,
            y: newY,
          };
        }
        return field;
      })
    );

    // Set the dragged field state
    setDraggedField(fieldId);
  };

  // Event handler for when the mouse button is released
  const handleMouseUp = () => {
    // Clear the dragged field state
    setDraggedField(null);
  };

  const handleNewField = (fieldId, event) => {
    const newX = 70;
    const newY = 120;
    let fieldsLength = fields.length + 1;
    const newField = { id: `field${fieldsLength++}`, x: newX, y: newY };

    setFields([...fields, newField]);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "80vh" }}>
      <div
        ref={containerRef}
        onMouseUp={handleMouseUp}
        style={{ width: "100%", height: "100%" }}
        className="draggable"
      >
        <h1 style={{ textAlign: "center" }}>Drag the elements around</h1>
        {/* Render the fields */}
        {fields.map((field) => (
          <div
            key={field.id}
            onMouseDown={(event) => handleFieldDrag(field.id, event)}
            onMouseMove={(event) =>
              draggedField === field.id
                ? handleFieldDrag(field.id, event)
                : null
            }
            style={{
              position: "absolute",
              left: field.x,
              top: field.y,
              width: "250px",
              height: "50px",
              border: "1px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              userSelect: "none",
              cursor: "pointer",
            }}
            className="draggable-field"
          >
            {field.id}
          </div>
        ))}
        <button onClick={handleNewField} className="draggable-add">
          +
        </button>
      </div>
    </div>
  );
};

export default Admin;
