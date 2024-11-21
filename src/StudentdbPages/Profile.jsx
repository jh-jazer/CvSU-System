import React, { useState } from 'react';
import './Profile.css'; // Import the CSS file for styling

const Profile = () => {
  const [formData, setFormData] = useState({
    givenName: '',
    familyName: '',
    middleName: '',
    suffix: '',
    sexAtBirth: 'Male',
    civilStatus: 'Single',
    religion: 'Roman Catholic',
    dateOfBirth: '',
    contactNumber: '',
    nationality: 'Filipino',
    houseNumber: '',
    streetAddress: '',
    province: 'Metro Manila',
    municipality: 'City of Las Piñas',
    barangay: 'Pamplona Tres',
    zipCode: '',
    region: 'National Capital Region (NCR)',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="profile-container">
      <form className="profile-form">
        <h2>Personal Information*</h2>
        <div className="form-group">
          <label>Given Name*</label>
          <input type="text" name="givenName" value={formData.givenName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Family Name*</label>
          <input type="text" name="familyName" value={formData.familyName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Middle Name (Not Applicable)</label>
          <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Suffix (Optional)</label>
          <input type="text" name="suffix" value={formData.suffix} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Sex at birth</label>
          <select name="sexAtBirth" value={formData.sexAtBirth} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date of birth</label>
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Civil Status</label>
          <select name="civilStatus" value={formData.civilStatus} onChange={handleChange}>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
        </div>
        <div className="form-group">
          <label>Religion</label>
          <input type="text" name="religion" value={formData.religion} onChange={handleChange} />
        </div>

        <h2>Residential Address*</h2>
        <div className="form-group">
          <label>House Number*</label>
          <input type="text" name="houseNumber" value={formData.houseNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Street/Subdivision Address*</label>
          <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Province</label>
          <select name="province" value={formData.province} onChange={handleChange}>
            <option value="Metro Manila">Metro Manila</option>
            {/* Add more provinces as needed */}
          </select>
        </div>
        <div className="form-group">
          <label>Municipality</label>
          <select name="municipality" value={formData.municipality} onChange={handleChange}>
            <option value="City of Las Piñas">City of Las Piñas</option>
            {/* Add more municipalities as needed */}
          </select>
        </div>
        <div className="form-group">
          <label>Barangay</label>
          <select name="barangay" value={formData.barangay} onChange={handleChange}>
            <option value="Pamplona Tres">Pamplona Tres</option>
            {/* Add more barangays as needed */}
          </select>
        </div>
        <div className="form-group">
          <label>Zip Code</label>
          <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Region</label>
          <select name="region" value={formData.region} onChange={handleChange}>
            <option value="National Capital Region (NCR)">National Capital Region (NCR)</option>
            {/* Add more regions as needed */}
          </select>
        </div>
       
      </form>
    </div>
  );
};

export default Profile;