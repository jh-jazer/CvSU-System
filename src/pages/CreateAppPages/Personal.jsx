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
  >
    <option value="" disabled selected>
      Select your religion
    </option>
    <option value="Anglican">Anglican</option>
    <option value="Apostolic">Apostolic</option>
    <option value="Assembly of God">Assembly of God</option>
    <option value="Babi and Baha'i Faiths">Babi and Baha'i Faiths</option>
    <option value="Baptist">Baptist</option>
    <option value="Bible Church of Christ">Bible Church of Christ</option>
    <option value="Buddhism">Buddhism</option>
    <option value="Calvinist">Calvinist</option>
    <option value="Christian and Missionary Alliance">
      Christian and Missionary Alliance
    </option>
    <option value="Christian Science">Christian Science</option>
    <option value="Church of Christ">Church of Christ</option>
    <option value="Church of God">Church of God</option>
    <option value="Church of God in Christ">Church of God in Christ</option>
    <option value="Church of Jesus Christ of Latter-day Saints">
      Church of Jesus Christ of Latter-day Saints
    </option>
    <option value="Church of the Nazarene">Church of the Nazarene</option>
    <option value="Confucianism">Confucianism</option>
    <option value="Deism">Deism</option>
    <option value="Episcopalian">Episcopalian</option>
    <option value="Evangelical">Evangelical</option>
    <option value="Evangelical Christian">Evangelical Christian</option>
    <option value="Hinduism">Hinduism</option>
    <option value="Iglesia ni Cristo">Iglesia ni Cristo</option>
    <option value="Islam">Islam</option>
    <option value="Jehovah's Witness">Jehovah's Witness</option>
    <option value="Judaism">Judaism</option>
    <option value="Lutheran">Lutheran</option>
    <option value="Methodist">Methodist</option>
    <option value="None">None</option>
    <option value="Orthodox">Orthodox</option>
    <option value="Other Christian and Christian Heritage">
      Other Christian and Christian Heritage
    </option>
    <option value="Pentecostal">Pentecostal</option>
    <option value="Philippine Independent Church">
      Philippine Independent Church
    </option>
    <option value="Presbyterian">Presbyterian</option>
    <option value="Protestant">Protestant</option>
    <option value="Roman Catholic">Roman Catholic</option>
    <option value="Seventh Day Adventist">Seventh Day Adventist</option>
    <option value="Sikhism">Sikhism</option>
    <option value="Taoism">Taoism</option>
    <option value="United Church of Christ in the Philippines">
      United Church of Christ in the Philippines
    </option>
    <option value="Worldwide Church of God">Worldwide Church of God</option>
    <option value="Zoroastrianism">Zoroastrianism</option>
  </select>
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
