import React, { useState } from 'react';

const AddItemForm = ({ addItem }) => {
  const [newItem, setNewItem] = useState({
    id: '',
    name: '',
    dob: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem({ id: '', name: '', dob: '', phoneNumber: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input
          type="text"
          name="id"
          value={newItem.id}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        DOB:
        <input
          type="text"
          name="dob"
          value={newItem.dob}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          name="phoneNumber"
          value={newItem.phoneNumber}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
