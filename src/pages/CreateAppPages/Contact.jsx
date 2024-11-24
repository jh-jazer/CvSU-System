// Contact.jsx
import React, { useState } from 'react';
import { Link } from "react-router-dom";
const Contact = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [formData, setFormData] = useState({
    phoneNumber: '',
    email: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, such as sending data to an API or storing it locally
    console.log('Contact Information Submitted:', formData);
  };

  return (
    <div className="w-full min-h-screen bg-white p-8 pt-12 shadow-xl rounded-lg flex flex-col justify-between">
    <div className="contact-form-container">
      <h2 className='text-3xl font-extrabold flex justify-center items-center'>Contact Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            placeholder="Enter phone number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter email address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="emergencyContactName">Emergency Contact Name</label>
          <input
            type="text"
            id="emergencyContactName"
            name="emergencyContactName"
            value={formData.emergencyContactName}
            onChange={handleChange}
            required
            placeholder="Enter emergency contact name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="emergencyContactNumber">Emergency Contact Number</label>
          <input
            type="tel"
            id="emergencyContactNumber"
            name="emergencyContactNumber"
            value={formData.emergencyContactNumber}
            onChange={handleChange}
            required
            placeholder="Enter emergency contact number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Enter home address"
          />
        </div>
      </form>
    </div>
    <div className="flex justify-end gap-5 mb-5 mx-5">
        <button
          className="px-6 py-2 bg-[#345e34] text-white font-bold rounded-lg hover:bg-green-900 focus:outline-none disabled:bg-gray-400"
          disabled={isButtonDisabled}
          onClick={() => alert("Application submitted successfully!")}
        >
          Prev
        </button>
        <Link to="/createapplication/family">
          <button
            className="px-6 py-2 bg-[#345e34] text-white font-bold rounded-lg hover:bg-green-900 focus:outline-none"
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
