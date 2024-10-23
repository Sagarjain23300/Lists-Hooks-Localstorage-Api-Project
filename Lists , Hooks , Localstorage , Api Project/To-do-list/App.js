import React, { useState } from 'react';
import './App.css';
import TodoItem from './Todoitem';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() === '') return;
    setItems([...items, newItem]);
    setNewItem('');
  };

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const clearList = () => {
    setItems([]);
  };

  const handleEdit = (index, value) => {
    const updatedItems = items.map((item, i) => (i === index ? value : item));
    setItems(updatedItems);
  };

  return (
    <div className="App">
      <h1>Grocery Shopping</h1>
      <div className="list-container">
        {items.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            index={index}
            deleteItem={deleteItem}
            editItem={handleEdit}
          />
        ))}
      </div>

      <div className="input-container">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add something to your list"
        />
        <button onClick={addItem}>Add</button>
      </div>

      <button onClick={clearList} className="delete-list">
        Delete List
      </button>
    </div>
  );
}

export default App;
