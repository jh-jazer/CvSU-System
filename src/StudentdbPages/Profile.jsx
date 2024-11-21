import React, { useState } from 'react';

const Profile = () => {
  const [formData] = useState({
    givenName: 'John',
    familyName: 'Doe',
    middleName: '',
    suffix: '',
    sexAtBirth: 'Male',
    civilStatus: 'Single',
    religion: 'Roman Catholic',
    dateOfBirth: '2024-02-05',
    contactNumber: '09128796420',
    nationality: 'Filipino',
    houseNumber: '1',
    streetAddress: 'Bayabas St.',
    province: 'Metro Manila',
    municipality: 'City of Las Piñas',
    barangay: 'Pamplona Tres',
    zipCode: '1740',
    region: 'National Capital Region (NCR)',
  });

  return (
    <div className="bg-gray-100 py-8">
      <form className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Personal Information Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Personal Information*</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block font-medium mb-1">Given Name*</label>
              <input
                type="text"
                value={formData.givenName}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-600"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Middle Name (Not Applicable)</label>
              <input
                type="text"
                value={formData.middleName}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-600"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Family Name*</label>
              <input
                type="text"
                value={formData.familyName}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-600"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Suffix (Optional)</label>
              <input
                type="text"
                value={formData.suffix}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-600"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Sex</label>
              <select
                value={formData.sexAtBirth}
                disabled
                className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-600"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Date of Birth</label>
              <input
                type="date"
                value={formData.dateOfBirth}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-600"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Contact Number</label>
              <input
                type="text"
                value={formData.contactNumber}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-600"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Civil Status</label>
              <select
                value={formData.civilStatus}
                disabled
                className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-600"
              >
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Religion</label>
              <input
                type="text"
                value={formData.religion}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-600"
              />
            </div>
          </div>
        </div>

        {/* Residential Address Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Residential Address*</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block font-medium mb-1">House Number*</label>
              <input
                type="text"
                value={formData.houseNumber}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-600"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Street/Subdivision Address*</label>
              <input
                type="text"
                value={formData.streetAddress}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-600"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Province</label>
              <select
                value={formData.province}
                disabled
                className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-600"
              >
                <option value="Metro Manila">Metro Manila</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Municipality</label>
              <select
                value={formData.municipality}
                disabled
                className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-600"
              >
                <option value="City of Las Piñas">City of Las Piñas</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Barangay</label>
              <select
                value={formData.barangay}
                disabled
                className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-600"
              >
                <option value="Pamplona Tres">Pamplona Tres</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Zip Code</label>
              <input
                type="text"
                value={formData.zipCode}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-600"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Region</label>
              <select
                value={formData.region}
                disabled
                className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-600"
              >
                <option value="National Capital Region (NCR)">
                  National Capital Region (NCR)
                </option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
