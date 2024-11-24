// Education.jsx
import React, { useState } from 'react';
import { Link } from "react-router-dom";
const Education = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [formData, setFormData] = useState({
    elementarySchoolName: '',
    elementarySchoolAddress: '',
    elementarySchoolType: 'public', // Default to 'public'
    elementarySchoolYearGraduated: '',

    highSchoolName: '',
    highSchoolAddress: '',
    highSchoolType: 'public', // Default to 'public'
    highSchoolYearGraduated: '',

    seniorHighSchoolName: '',
    seniorHighSchoolAddress: '',
    seniorHighSchoolType: 'public', // Default to 'public'
    seniorHighSchoolYearGraduated: '',
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
    console.log('Education Information Submitted:', formData);
  };

  return (
    <div className="w-full min-h-screen bg-white p-8 pt-12 shadow-xl rounded-lg flex flex-col justify-between">
    <div className="education-form-container">
      <h2 className='text-3xl font-extrabold flex justify-center items-center'>Educational Information</h2>
      <form onSubmit={handleSubmit}>
        {/* Elementary School Fields */}
        <h3 className='text-3xl font-extrabold flex justify-center items-center'>Elementary School</h3>
        <div className="form-group">
          <label htmlFor="elementarySchoolName">Elementary School Name</label>
          <input
            type="text"
            id="elementarySchoolName"
            name="elementarySchoolName"
            value={formData.elementarySchoolName}
            onChange={handleChange}
            required
            placeholder="Enter Elementary School Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="elementarySchoolAddress">School Address</label>
          <input
            type="text"
            id="elementarySchoolAddress"
            name="elementarySchoolAddress"
            value={formData.elementarySchoolAddress}
            onChange={handleChange}
            required
            placeholder="Enter School Address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="elementarySchoolType">School Type</label>
          <select
            id="elementarySchoolType"
            name="elementarySchoolType"
            value={formData.elementarySchoolType}
            onChange={handleChange}
            required
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="elementarySchoolYearGraduated">Year Graduated</label>
          <input
            type="number"
            id="elementarySchoolYearGraduated"
            name="elementarySchoolYearGraduated"
            value={formData.elementarySchoolYearGraduated}
            onChange={handleChange}
            required
            placeholder="Enter Graduation Year"
          />
        </div>

        {/* High School Fields */}
        <h3 className='text-3xl font-extrabold flex justify-center items-center'>High School</h3>
        <div className="form-group">
          <label htmlFor="highSchoolName">High School Name</label>
          <input
            type="text"
            id="highSchoolName"
            name="highSchoolName"
            value={formData.highSchoolName}
            onChange={handleChange}
            required
            placeholder="Enter High School Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="highSchoolAddress">School Address</label>
          <input
            type="text"
            id="highSchoolAddress"
            name="highSchoolAddress"
            value={formData.highSchoolAddress}
            onChange={handleChange}
            required
            placeholder="Enter School Address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="highSchoolType">School Type</label>
          <select
            id="highSchoolType"
            name="highSchoolType"
            value={formData.highSchoolType}
            onChange={handleChange}
            required
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="highSchoolYearGraduated">Year Graduated</label>
          <input
            type="number"
            id="highSchoolYearGraduated"
            name="highSchoolYearGraduated"
            value={formData.highSchoolYearGraduated}
            onChange={handleChange}
            required
            placeholder="Enter Graduation Year"
          />
        </div>

        {/* Senior High School Fields */}
        <h3 className='text-3xl font-extrabold flex justify-center items-center'>Senior High School</h3>
        <div className="form-group">
          <label htmlFor="seniorHighSchoolName">Senior High School Name</label>
          <input
            type="text"
            id="seniorHighSchoolName"
            name="seniorHighSchoolName"
            value={formData.seniorHighSchoolName}
            onChange={handleChange}
            required
            placeholder="Enter Senior High School Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="seniorHighSchoolAddress">School Address</label>
          <input
            type="text"
            id="seniorHighSchoolAddress"
            name="seniorHighSchoolAddress"
            value={formData.seniorHighSchoolAddress}
            onChange={handleChange}
            required
            placeholder="Enter School Address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="seniorHighSchoolType">School Type</label>
          <select
            id="seniorHighSchoolType"
            name="seniorHighSchoolType"
            value={formData.seniorHighSchoolType}
            onChange={handleChange}
            required
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="seniorHighSchoolYearGraduated">Year Graduated</label>
          <input
            type="number"
            id="seniorHighSchoolYearGraduated"
            name="seniorHighSchoolYearGraduated"
            value={formData.seniorHighSchoolYearGraduated}
            onChange={handleChange}
            required
            placeholder="Enter Graduation Year"
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
        <Link to="/createapplication/requirements">
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

export default Education;
