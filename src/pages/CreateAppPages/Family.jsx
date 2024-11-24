// Family.jsx
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Family = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [formData, setFormData] = useState({
    fatherName: '',
    motherName: '',
    fatherOccupation: '',
    motherOccupation: '',
    numberOfSiblings: '',
    familyIncome: '',
    familyAddress: '',
    additionalInfo: ''
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
    // Handle form submission logic, like sending data to an API
    console.log('Family Data Submitted:', formData);
  };

  return (
    <div className="w-full min-h-screen bg-white p-8 pt-12 shadow-xl rounded-lg flex flex-col justify-between">
    <div className="family-form-container">
      <h2 className='text-3xl font-extrabold flex justify-center items-center'>Family Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fatherName">Father's Name</label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="motherName">Mother's Name</label>
          <input
            type="text"
            id="motherName"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fatherOccupation">Father's Occupation</label>
          <input
            type="text"
            id="fatherOccupation"
            name="fatherOccupation"
            value={formData.fatherOccupation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="motherOccupation">Mother's Occupation</label>
          <input
            type="text"
            id="motherOccupation"
            name="motherOccupation"
            value={formData.motherOccupation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="numberOfSiblings">Number of Siblings</label>
          <input
            type="number"
            id="numberOfSiblings"
            name="numberOfSiblings"
            value={formData.numberOfSiblings}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="familyIncome">Family Income (Annual)</label>
          <input
            type="text"
            id="familyIncome"
            name="familyIncome"
            value={formData.familyIncome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="familyAddress">Family Address</label>
          <input
            type="text"
            id="familyAddress"
            name="familyAddress"
            value={formData.familyAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="additionalInfo">Additional Information</label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
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
        <Link to="/createapplication/education">
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

export default Family;
