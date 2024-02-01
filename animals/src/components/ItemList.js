import React from 'react';

const ItemList = ({ items, deleteItem, editItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {`ID: ${item.id}, Name: ${item.name}, DOB: ${item.dob}, Phone Number: ${item.phoneNumber}`}{' '}
          <button onClick={() => editItem(item)}>Edit</button>{' '}
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
