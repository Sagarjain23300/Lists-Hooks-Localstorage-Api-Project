import React, { useState } from 'react';

function TodoItem({ item, index, deleteItem, editItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(item);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      editItem(index, newValue);
    }
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
      ) : (
        <span>{item}</span>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={() => deleteItem(index)}>Delete</button>
    </div>
  );
}

export default TodoItem;
