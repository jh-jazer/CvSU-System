import React, { useState } from "react";
import Laya from "../assets/laya.png"; // Adjust the path based on your project structure

const CreateApplication = () => {
  const [preferredProgram, setPreferredProgram] = useState("");
  const [currentPhase, setCurrentPhase] = useState(1); // Tracks current phase
  const [errorMessage, setErrorMessage] = useState("");

  // Form data state for different phases
  const [applicationDetails, setApplicationDetails] = useState({});
  const [personalInfo, setPersonalInfo] = useState({});
  const [contactDetails, setContactDetails] = useState({});
  const [familyProfile, setFamilyProfile] = useState({});
  const [educationalInfo, setEducationalInfo] = useState({});
  const [requirements, setRequirements] = useState({});
  const [appointment, setAppointment] = useState({});

  const handleNextPhase = () => {
    // Validate data based on the current phase
    if (currentPhase === 1 && !preferredProgram) {
      setErrorMessage("Please choose your preferred program.");
      return;
    }

    setErrorMessage(""); // Clear error message
    setCurrentPhase(currentPhase + 1); // Move to the next phase
  };

  const handlePrevPhase = () => {
    setCurrentPhase(currentPhase - 1); // Go back to the previous phase
  };

  const handleSubmit = () => {
    // Final submission logic (e.g., send data to server)
    alert("Application submitted successfully!");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      style={{
        backgroundImage: `url(${Laya})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#081708]/80 flex items-center justify-center z-10"></div>
      <div className="w-full max-w-3xl bg-white p-8 shadow-lg px-[50px] rounded-lg z-30">
        {/* Phase Indicators */}
        <div className="flex justify-between mb-4">
          <span className={`font-bold ${currentPhase === 1 ? "text-[#C61A01]" : "text-gray-500"}`}>Phase 1: Application Details</span>
          <span className={`font-bold ${currentPhase === 2 ? "text-[#C61A01]" : "text-gray-500"}`}>Phase 2: Personal Info</span>
          <span className={`font-bold ${currentPhase === 3 ? "text-[#C61A01]" : "text-gray-500"}`}>Phase 3: Contact Details</span>
          <span className={`font-bold ${currentPhase === 4 ? "text-[#C61A01]" : "text-gray-500"}`}>Phase 4: Family Profile</span>
          <span className={`font-bold ${currentPhase === 5 ? "text-[#C61A01]" : "text-gray-500"}`}>Phase 5: Educational Info</span>
          <span className={`font-bold ${currentPhase === 6 ? "text-[#C61A01]" : "text-gray-500"}`}>Phase 6: Upload Requirements</span>
          <span className={`font-bold ${currentPhase === 7 ? "text-[#C61A01]" : "text-gray-500"}`}>Phase 7: Schedule Appointment</span>
        </div>

        {/* Application Form */}
        {currentPhase === 1 && (
          <div className="mb-6">
            <p className="text-gray-700 text-lg font-semibold mb-2">
              What is your preferred program?
            </p>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C61A01] focus:border-transparent"
              value={preferredProgram}
              onChange={(e) => setPreferredProgram(e.target.value)}
            >
              <option value="" disabled>
                Select a program
              </option>
              <option value="cs">BS Computer Science</option>
              <option value="it">BS Information Technology</option>
            </select>
          </div>
        )}

        {currentPhase === 2 && (
          <div className="mb-6">
            <p className="text-gray-700 text-lg font-semibold mb-2">
              Enter your personal information
            </p>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C61A01] focus:border-transparent"
              onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })}
            />
            <input
              type="date"
              placeholder="Birthdate"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C61A01] focus:border-transparent mt-4"
              onChange={(e) => setPersonalInfo({ ...personalInfo, birthdate: e.target.value })}
            />
          </div>
        )}

        {currentPhase === 3 && (
          <div className="mb-6">
            <p className="text-gray-700 text-lg font-semibold mb-2">
              Enter your contact details
            </p>
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C61A01] focus:border-transparent"
              onChange={(e) => setContactDetails({ ...contactDetails, phone: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C61A01] focus:border-transparent mt-4"
              onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })}
            />
          </div>
        )}

        {currentPhase === 4 && (
          <div className="mb-6">
            <p className="text-gray-700 text-lg font-semibold mb-2">
              Family Profile
            </p>
            <input
              type="text"
              placeholder="Father's Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C61A01] focus:border-transparent"
              onChange={(e) => setFamilyProfile({ ...familyProfile, fatherName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Mother's Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C61A01] focus:border-transparent mt-4"
              onChange={(e) => setFamilyProfile({ ...familyProfile, motherName: e.target.value })}
            />
          </div>
        )}

        {currentPhase === 5 && (
          <div className="mb-6">
            <p className="text-gray-700 text-lg font-semibold mb-2">
              Educational Info
            </p>
            <input
              type="text"
              placeholder="High School"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C61A01] focus:border-transparent"
              onChange={(e) => setEducationalInfo({ ...educationalInfo, highSchool: e.target.value })}
            />
            <input
              type="text"
              placeholder="Previous College"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C61A01] focus:border-transparent mt-4"
              onChange={(e) => setEducationalInfo({ ...educationalInfo, previousCollege: e.target.value })}
            />
          </div>
        )}

        {currentPhase === 6 && (
          <div className="mb-6">
            <p className="text-gray-700 text-lg font-semibold mb-2">
              Upload Requirements
            </p>
            <input
              type="file"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C61A01] focus:border-transparent"
              onChange={(e) => setRequirements({ ...requirements, file: e.target.files[0] })}
            />
          </div>
        )}

        {currentPhase === 7 && (
          <div className="mb-6">
            <p className="text-gray-700 text-lg font-semibold mb-2">
              Schedule Appointment
            </p>
            <input
              type="datetime-local"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C61A01] focus:border-transparent"
              onChange={(e) => setAppointment({ ...appointment, dateTime: e.target.value })}
            />
          </div>
        )}

        {/* Error Message */}
        {errorMessage && <div className="mb-4 text-red-500">{errorMessage}</div>}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {currentPhase > 1 && (
            <button
              className="px-6 py-2 bg-gray-500 text-white rounded-lg"
              onClick={handlePrevPhase}
            >
              Back
            </button>
          )}
          {currentPhase < 7 ? (
            <button
              className="px-6 py-2 bg-[#C61A01] text-white rounded-lg"
              onClick={handleNextPhase}
            >
              Next
            </button>
          ) : (
            <button
              className="px-6 py-2 bg-[#C61A01] text-white rounded-lg"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateApplication;
