import React, { useState } from 'react';
import { Link } from "react-router-dom";
const Appointment = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [appointments, setAppointments] = useState([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleAddAppointment = (e) => {
    e.preventDefault();
    if (date && time) {
      const appointment = {
        date,
        time,
      };
      setAppointments((prevAppointments) => [...prevAppointments, appointment]);
      setDate(''); // Clear the date input after adding
      setTime(''); // Clear the time input after adding
    } else {
      alert("Please select both a date and a time for the appointment.");
    }
  };

  const handleDeleteAppointment = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
  };

  return (
    <div className="w-full min-h-screen bg-white p-8 pt-12 shadow-xl rounded-lg flex flex-col justify-between">
    <div className="appointment-form-container">
      <h2 className='text-3xl font-extrabold flex justify-center items-center'>Schedule an Appointment</h2>
      <form onSubmit={handleAddAppointment}>
        <div className="form-group">
          <label htmlFor="appointmentDate">Select Date</label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="appointmentTime">Select Time</label>
          <input
            type="time"
            id="appointmentTime"
            name="appointmentTime"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Add Appointment</button>
      </form>

      <div className="appointments-list">
        <h3>Scheduled Appointments</h3>
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index} className="appointment-item">
              <span>{`${appointment.date} at ${appointment.time}`}</span>
              <button
                type="button"
                className="delete-btn"
                onClick={() => handleDeleteAppointment(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="flex justify-end gap-5 mb-5 mx-5">
        <button
          className="px-6 py-2 bg-[#345e34] text-white font-bold rounded-lg hover:bg-green-900 focus:outline-none disabled:bg-gray-400"
          disabled={isButtonDisabled}
          onClick={() => alert("Application submitted successfully!")}
        >
          Prev
        </button>
        <Link to="/createapplication/details">
          <button
            className="px-6 py-2 bg-[#345e34] text-white font-bold rounded-lg hover:bg-green-900 focus:outline-none"
          >
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Appointment;
