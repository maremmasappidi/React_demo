import React, { useState } from 'react';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'maremma sappidi', dob: '1999-10-10', phoneNumber: '6305092835' },
    { id: 2, name: 'Akshya velpoor', dob: '2000-01-01', phoneNumber: '6305092835' },
  ]);

  const [newItem, setNewItem] = useState({ id: null, name: '', dob: '', phoneNumber: '' });
  const [editing, setEditing] = useState(false);

  const addItem = () => {
    setItems([...items, { ...newItem, id: items.length + 1 }]);
    setNewItem({ id: null, name: '', dob: '', phoneNumber: '' });
  };

  const editItem = (item) => {
    setEditing(true);
    setNewItem(item);
  };

  const updateItem = () => {
    setItems(items.map((item) => (item.id === newItem.id ? newItem : item)));
    setNewItem({ id: null, name: '', dob: '', phoneNumber: '' });
    setEditing(false);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Crud Operaions</h1>

      {editing ? (
        <div>
          <h2>Edit Item</h2>
          <label>
            ID:
            <input type="text" value={newItem.id} readOnly />
          </label>
          <label>
            Name:
            <input
              type="text"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
          </label>
          <label>
            DOB:
            <input
              type="text"
              value={newItem.dob}
              onChange={(e) => setNewItem({ ...newItem, dob: e.target.value })}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              value={newItem.phoneNumber}
              onChange={(e) => setNewItem({ ...newItem, phoneNumber: e.target.value })}
            />
          </label>
          <button onClick={updateItem}>Update Item</button>
        </div>
      ) : (
        <div>
          <h2>Add Item</h2>
          <label>
            Name:
            <input
              type="text"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
          </label>
          <label>
            DOB:
            <input
              type="text"
              value={newItem.dob}
              onChange={(e) => setNewItem({ ...newItem, dob: e.target.value })}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              value={newItem.phoneNumber}
              onChange={(e) => setNewItem({ ...newItem, phoneNumber: e.target.value })}
            />
          </label>
          <button onClick={addItem}>Add Item</button>
        </div>
      )}

      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {`ID: ${item.id}, Name: ${item.name}, DOB: ${item.dob}, Phone Number: ${item.phoneNumber}`}{' '}
            <button onClick={() => editItem(item)}>Edit</button>{' '}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
