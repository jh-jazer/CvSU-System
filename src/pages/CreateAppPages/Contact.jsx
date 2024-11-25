import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Contact = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [formData, setFormData] = useState({
    phoneNumber: '',
    email: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });
  const [errors, setErrors] = useState({
    phoneNumber: '',
    email: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    addressLine1: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  const navigate = useNavigate();

  // Validate the form
  const validate = () => {
    let validationErrors = {};
    let isValid = true;

    // Check if required fields are filled and valid
    if (!formData.phoneNumber) {
      validationErrors.phoneNumber = "Phone Number is required.";
      isValid = false;
    } else if (!/^\d{10,15}$/.test(formData.phoneNumber)) {
      validationErrors.phoneNumber = "Phone Number must be between 10 and 15 digits.";
      isValid = false;
    }

    if (!formData.email) {
      validationErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is invalid.";
      isValid = false;
    }

    if (!formData.emergencyContactName) {
      validationErrors.emergencyContactName = "Emergency Contact Name is required.";
      isValid = false;
    }

    if (!formData.emergencyContactNumber) {
      validationErrors.emergencyContactNumber = "Emergency Contact Number is required.";
      isValid = false;
    } else if (!/^\d{10,15}$/.test(formData.emergencyContactNumber)) {
      validationErrors.emergencyContactNumber = "Emergency Contact Number must be between 10 and 15 digits.";
      isValid = false;
    }

    if (!formData.addressLine1) {
      validationErrors.addressLine1 = "Address Line 1 is required.";
      isValid = false;
    }

    if (!formData.city) {
      validationErrors.city = "City is required.";
      isValid = false;
    }

    if (!formData.state) {
      validationErrors.state = "State/Province/Region is required.";
      isValid = false;
    }

    if (!formData.zipCode) {
      validationErrors.zipCode = "Zip Code is required.";
      isValid = false;
    }

    if (!formData.country) {
      validationErrors.country = "Country is required.";
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
        !newFormData.phoneNumber || !newFormData.email || !newFormData.emergencyContactName || !newFormData.emergencyContactNumber ||
        !newFormData.addressLine1 || !newFormData.city || !newFormData.state || !newFormData.zipCode || !newFormData.country
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
      console.log("Contact Information Submitted:", formData);
      navigate('/createapplication/family');
    } else {
      console.log("Form contains errors, submission blocked.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-white p-8 pt-12 shadow-xl rounded-lg flex flex-col justify-between">
      <div className="contact-form-container">
        <h2 className="text-3xl font-extrabold flex justify-center items-center">Contact Information</h2>
        <h2 className="text-lg text-gray-600">Please fill out your Contact Information.</h2>
        <form onSubmit={handleSubmit}>
          {/* Phone Number */}
          <div className="form-group text-lg font-sans text-gray-600">
            <label className="text-gray-600 text-lg font-semibold" htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              placeholder="Enter phone number"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
          </div>

          {/* Email Address */}
          <div className="form-group text-gray-600">
            <label className="text-gray-600 text-lg font-semibold" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter email address"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Emergency Contact Name */}
          <div className="form-group text-lg text-gray-600">
            <label className="text-gray-600 text-lg font-semibold" htmlFor="emergencyContactName">Emergency Contact Name</label>
            <input
              type="text"
              id="emergencyContactName"
              name="emergencyContactName"
              value={formData.emergencyContactName}
              onChange={handleChange}
              required
              placeholder="Enter emergency contact name"
            />
            {errors.emergencyContactName && <p className="text-red-500 text-sm">{errors.emergencyContactName}</p>}
          </div>

          {/* Emergency Contact Number */}
          <div className="form-group text-lg text-gray-600">
            <label className="text-gray-600 text-lg font-semibold" htmlFor="emergencyContactNumber">Emergency Contact Number</label>
            <input
              type="tel"
              id="emergencyContactNumber"
              name="emergencyContactNumber"
              value={formData.emergencyContactNumber}
              onChange={handleChange}
              required
              placeholder="Enter emergency contact number"
            />
            {errors.emergencyContactNumber && <p className="text-red-500 text-sm">{errors.emergencyContactNumber}</p>}
          </div>

          {/* Address Fields */}
          <div className="form-group text-lg text-gray-600">
            <label className="text-gray-600 text-lg font-semibold" htmlFor="addressLine1">Address Line 1</label>
            <input
              type="text"
              id="addressLine1"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              required
              placeholder="Enter address line 1"
            />
            {errors.addressLine1 && <p className="text-red-500 text-sm">{errors.addressLine1}</p>}
          </div>

          <div className="form-group text-lg text-gray-600">
            <label className="text-gray-600 text-lg font-semibold" htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder="Enter city"
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
          </div>

          <div className="form-group text-lg text-gray-600">
            <label className="text-gray-600 text-lg font-semibold" htmlFor="state">State/Province/Region</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              placeholder="Enter state, province, or region"
            />
            {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
          </div>

          <div className="form-group text-lg text-gray-600">
            <label className="text-gray-600 text-lg font-semibold" htmlFor="zipCode">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              placeholder="Enter zip code"
            />
            {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode}</p>}
          </div>

          <div className="form-group text-lg text-gray-600">
            <label className="text-gray-600 text-lg font-semibold" htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              placeholder="Enter country"
            />
            {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-5 mb-5 mx-5">
            <Link to="/createapplication/personal">
              <button className="px-6 py-2 bg-[#345e34] text-white font-bold rounded-lg hover:bg-green-900 focus:outline-none">Previous</button>
            </Link>
            <button className="px-6 py-2 bg-[#345e34] text-white font-bold rounded-lg hover:bg-green-900 focus:outline-none" 
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
