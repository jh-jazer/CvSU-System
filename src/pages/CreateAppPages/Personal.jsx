import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";

const Personal = () => {
  // Access values from the context

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  return (
    <div className="w-full min-h-screen bg-white p-8 pt-12 shadow-xl rounded-lg flex flex-col justify-between">
      {/* Header Section */}
      <div>
        <div className="text-center my-10">
          <h1 className="text-3xl font-extrabold text-[#001800]">Personal Information</h1>
          <h2 className="text-lg text-gray-600">Please fill out your personal information.</h2>
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
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#345e34]"
            placeholder="John"
            onChange={(e) => setIsButtonDisabled(e.target.value === '')}
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-600 text-lg font-semibold" htmlFor="middleName">
            Middle Name (Not Applicable)
          </label>
          <input
            id="middleName"
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#345e34]"
            placeholder="N/A"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-600 text-lg font-semibold" htmlFor="familyName">
            Family Name*
          </label>
          <input
            id="familyName"
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#345e34]"
            placeholder="Doe"
            onChange={(e) => setIsButtonDisabled(e.target.value === '')}
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-600 text-lg font-semibold" htmlFor="suffix">
            Suffix (Optional)
          </label>
          <input
            id="suffix"
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#345e34]"
            placeholder="Jr."
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-600 text-lg font-semibold" htmlFor="sex">
            Sex
          </label>
          <select
            id="sex"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#345e34]"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="text-gray-600 text-lg font-semibold" htmlFor="dob">
            Date of Birth
          </label>
          <input
            id="dob"
            type="date"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#345e34]"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-600 text-lg font-semibold" htmlFor="contactNumber">
            Contact Number
          </label>
          <input
            id="contactNumber"
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#345e34]"
            placeholder="09128796420"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-600 text-lg font-semibold" htmlFor="civilStatus">
            Civil Status
          </label>
          <select
            id="civilStatus"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#345e34]"
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
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#345e34]"
           
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-5 mb-5 mx-5">
        <button
          className="px-6 py-2 bg-[#345e34] text-white font-bold rounded-lg hover:bg-green-900 focus:outline-none disabled:bg-gray-400"
          disabled={isButtonDisabled}
          onClick={() => alert("Application submitted successfully!")}
        >
          Prev
        </button>
        <Link to="/createapplication/contact">
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

export default Personal;
