import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";

const Personal = () => {
  // State to track form values
  const [formData, setFormData] = useState({
    givenName: '',
    familyName: '',
    middleName: '',
    suffix: '',
    sex: 'male',
    dob: '',
    contactNumber: '',
    civilStatus: 'single',
    religion: 'Roman Catholic',
  });

  // State to track validation errors
  const [errors, setErrors] = useState({
    givenName: '',
    familyName: '',
    dob: '',
    contactNumber: '',
  });

  
  // State to track if the Next button should be disabled
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate(); 
  // Validate the form
  const validate = () => {
    let validationErrors = {};
    let isValid = true;

    // Check if required fields are filled
    if (!formData.givenName) {
      validationErrors.givenName = "Given Name is required.";
      isValid = false;
    }
    if (!formData.familyName) {
      validationErrors.familyName = "Family Name is required.";
      isValid = false;
    }
    if (!formData.dob) {
      validationErrors.dob = "Date of Birth is required.";
      isValid = false;
    }
    if (!formData.contactNumber) {
      validationErrors.contactNumber = "Contact Number is required.";
      isValid = false;
    } else if (!/^\d{11}$/.test(formData.contactNumber)) {
      validationErrors.contactNumber = "Contact Number must be 11 digits.";
      isValid = false;
    }

    setErrors(validationErrors);
    return isValid;
  };

  // Handle changes in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      const newFormData = { ...prevState, [name]: value };
      // Check if all required fields are filled to enable the Next button
      setIsButtonDisabled(
        !newFormData.givenName || !newFormData.familyName || !newFormData.dob || !newFormData.contactNumber
      );
      return newFormData;
    });
  };

  // Handle form submission (validation check before proceeding)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Only proceed if form is valid
    if (validate()) {
      // If validation is successful, navigate to the next page
      navigate('/createapplication/contact');
    } else {
      console.log("Form contains errors, submission blocked.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-white p-8 pt-12 shadow-xl rounded-lg flex flex-col justify-between">
      {/* Header Section */}
      <div>
        <div className="text-center my-10">
          <h1 className="text-3xl font-extrabold text-[#001800]">Personal Information</h1>
          <h2 className="text-lg text-gray-600">Please fill out your Personal Information.</h2>
        </div>
      </div>

      {/* Personal Information Fields */}
      <div className="mx-11 mb-6">
        <div className="mb-4">
          <label className="text-gray-600 text-lg font-semibold" htmlFor="givenName">
            Given Name*
          </label>
          <input
            id="givenName"
            name="givenName"
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#345e34]"
            placeholder="John"
            value={formData.givenName}
            onChange={handleChange}
          />
          {errors.givenName && <p className="text-red-500 text-sm">{errors.givenName}</p>}
        </div>

        <div className="mb-4">
          <label className="text-gray-600 text-lg font-semibold" htmlFor="middleName">
            Middle Name (Not Applicable)
          </label>
          <input
            id="middleName"
            name="middleName"
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#345e34]"
            placeholder="N/A"
            value={formData.middleName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-600 text-lg font-semibold" htmlFor="familyName">
            Family Name*
          </label>
          <input
            id="familyName"
            name="familyName"
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#345e34]"
            placeholder="Doe"
            value={formData.familyName}
            onChange={handleChange}
          />
          {errors.familyName && <p className="text-red-500 text-sm">{errors.familyName}</p>}
        </div>

        <div className="mb-4">
          <label className="text-gray-600 text-lg font-semibold" htmlFor="suffix">
            Suffix (Optional)
          </label>
          <input
            id="suffix"
            name="suffix"
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#345e34]"
            placeholder="Jr."
            value={formData.suffix}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-600 text-lg font-semibold" htmlFor="sex">
            Sex
          </label>
          <select
            id="sex"
            name="sex"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#345e34]"
            value={formData.sex}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="text-gray-600 text-lg font-semibold" htmlFor="dob">
            Date of Birth*
          </label>
          <input
            id="dob"
            name="dob"
            type="date"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#345e34]"
            value={formData.dob}
            onChange={handleChange}
          />
          {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
        </div>

        <div className="mb-4">
          <label className="text-gray-600 text-lg font-semibold" htmlFor="contactNumber">
            Contact Number*
          </label>
          <input
            id="contactNumber"
            name="contactNumber"
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#345e34]"
            placeholder="09128796420"
            value={formData.contactNumber}
            onChange={handleChange}
          />
          {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}
        </div>

        <div className="mb-4">
          <label className="text-gray-600 text-lg font-semibold" htmlFor="civilStatus">
            Civil Status
          </label>
          <select
            id="civilStatus"
            name="civilStatus"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#345e34]"
            value={formData.civilStatus}
            onChange={handleChange}
          >
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="text-gray-600 text-lg font-semibold" htmlFor="religion">
            Religion
          </label>
          <select
            id="religion"
            name="religion"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#345e34]"
            value={formData.religion}
            onChange={handleChange}
          >
            <option value="Roman Catholic">Roman Catholic</option>
            <option value="Christian">Christian</option>
          </select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-5 mb-5 mx-5">
        <Link to="/createapplication/details">
          <button
            className="px-6 py-2 bg-[#345e34] text-white font-bold rounded-lg hover:bg-green-900 focus:outline-none disabled:bg-gray-400"
          >
            Prev
          </button>
        </Link>

        <Link to="/createapplication/contact">
          <button
            className="px-6 py-2 bg-[#345e34] text-white font-bold rounded-lg hover:bg-green-900 focus:outline-none"
            onClick={handleSubmit}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Personal;
