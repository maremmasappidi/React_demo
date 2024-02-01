import React, { useState, useEffect } from 'react';

const EditItemForm = ({ currentItem, updateItem, setEditing }) => {
  const [editedItem, setEditedItem] = useState(currentItem);

  useEffect(() => {
    setEditedItem(currentItem);
  }, [currentItem]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({ ...editedItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem(editedItem);
    setEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input
          type="text"
          name="id"
          value={editedItem.id}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={editedItem.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        DOB:
        <input
          type="text"
          name="dob"
          value={editedItem.dob}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          name="phoneNumber"
          value={editedItem.phoneNumber}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Update Item</button>
    </form>
  );
};

export default EditItemForm;
