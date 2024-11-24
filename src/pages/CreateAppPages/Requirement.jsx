import React from "react";
import { Link } from "react-router-dom";

const Details = ({ applicantType, seniorHighTrack, strand, preferredProgram }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
     
      <div className="w-full max-w-2xl bg-white p-8 shadow-lg rounded-lg">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-[#C61A01]">
            Application Details
          </h1>
          <h2 className="text-lg text-gray-700">
            Please review your application information.
          </h2>
        </div>

        {/* Application Details */}
        <div className="mb-6">
          <p className="text-gray-700 text-lg font-semibold mb-2">
            Applicant Type:
          </p>
          <p className="text-gray-900 text-lg">{applicantType || "Not provided"}</p>
        </div>

        {seniorHighTrack && (
          <div className="mb-6">
            <p className="text-gray-700 text-lg font-semibold mb-2">
              Senior High Track:
            </p>
            <p className="text-gray-900 text-lg">
              {seniorHighTrack || "Not provided"}
            </p>
          </div>
        )}

        {strand && (
          <div className="mb-6">
            <p className="text-gray-700 text-lg font-semibold mb-2">Strand:</p>
            <p className="text-gray-900 text-lg">{strand || "Not provided"}</p>
          </div>
        )}

        <div className="mb-6">
          <p className="text-gray-700 text-lg font-semibold mb-2">
            Preferred Program:
          </p>
          <p className="text-gray-900 text-lg">
            {preferredProgram || "Not provided"}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <Link
            to="/create"
            className="px-4 py-2 bg-gray-300 text-gray-800 font-bold rounded-lg"
          >
            Edit Application
          </Link>
          <button
            className="px-6 py-2 bg-[#C61A01] text-white font-bold rounded-lg focus:outline-none"
            onClick={() => alert("Application submitted successfully!")}
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
