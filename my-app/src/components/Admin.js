import React, { useState } from 'react';



// const Admin = () => {
//   // Profile.js


const Admin = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
    role: '', // Investor, Asset Manager, Other
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <form>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <label>
          Country:
          <input type="text" name="country" value={formData.country} onChange={handleChange} />
        </label>
        <label>
          State:
          <input type="text" name="state" value={formData.state} onChange={handleChange} />
        </label>
        <label>
          City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
        </label>
        <label>
          Pincode:
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
        </label>
        <label>
          Who are you:
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="investor">Investor</option>
            <option value="assetManager">Asset Manager</option>
            <option value="other">Other</option>
          </select>
        </label>
      </form>
    </div>
  );
}; 
export default Admin;

