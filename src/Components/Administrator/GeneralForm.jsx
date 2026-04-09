// GeneralForm.js
import React, { useState } from "react";

export default function GeneralForm({ userType }) {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    phoneNumber: "",
    emailAddress: "",
    homeAddress: "",
    emergencyContact: "",
    licenseNumber: "",
    education: "",
    specialization: "",
    jobTitle: "",
    department: "",
  });

  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateLoginInfo = () => {
    // Generate username and password based on user's name or any other criteria
    const username = formData.fullName.replace(/\s+/g, "").toLowerCase();
    const password = Math.random().toString(36).slice(2); // Generate random password
    setLoginInfo({ username, password });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (send data to server, etc.)
    console.log("Form Data:", formData);
    console.log("Login Info:", loginInfo);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="fullName"
          className="block text-gray-700 font-bold mb-2"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="border border-gray-300 rounded-md px-3 py-2 mb-3"
        />

        <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">
          Date of Birth
        </label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 mb-3"
        />

        <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 mb-3"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label
          htmlFor="phoneNumber"
          className="block text-gray-700 font-bold mb-2"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          className="border border-gray-300 rounded-md px-3 py-2 mb-3"
        />

        <label
          htmlFor="emailAddress"
          className="block text-gray-700 font-bold mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          placeholder="Email Address"
          className="border border-gray-300 rounded-md px-3 py-2 mb-3"
        />

        <label
          htmlFor="homeAddress"
          className="block text-gray-700 font-bold mb-2"
        >
          Home Address
        </label>
        <textarea
          id="homeAddress"
          name="homeAddress"
          value={formData.homeAddress}
          onChange={handleChange}
          placeholder="Home Address"
          className="border border-gray-300 rounded-md px-3 py-2 mb-3 resize-none"
        ></textarea>
        <label
          htmlFor="emergencyContact"
          className="block text-gray-700 font-bold mb-2"
        >
          Emergency Contact
        </label>
        <input
          type="text"
          id="emergencyContact"
          name="emergencyContact"
          value={formData.emergencyContact}
          onChange={handleChange}
          placeholder="Emergency Contact"
          className="border border-gray-300 rounded-md px-3 py-2 mb-3"
        />

        <label
          htmlFor="licenseNumber"
          className="block text-gray-700 font-bold mb-2"
        >
          License Number
        </label>
        <input
          type="text"
          id="licenseNumber"
          name="licenseNumber"
          value={formData.licenseNumber}
          onChange={handleChange}
          placeholder="License Number"
          className="border border-gray-300 rounded-md px-3 py-2 mb-3"
        />

        <label
          htmlFor="education"
          className="block text-gray-700 font-bold mb-2"
        >
          Education
        </label>
        <input
          type="text"
          id="education"
          name="education"
          value={formData.education}
          onChange={handleChange}
          placeholder="Education"
          className="border border-gray-300 rounded-md px-3 py-2 mb-3"
        />

        <label
          htmlFor="specialization"
          className="block text-gray-700 font-bold mb-2"
        >
          Specialization
        </label>
        <input
          type="text"
          id="specialization"
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
          placeholder="Specialization"
          className="border border-gray-300 rounded-md px-3 py-2 mb-3"
        />


        <label
          htmlFor="department"
          className="block text-gray-700 font-bold mb-2"
        >
          Department
        </label>
        <select
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 mb-3"
        >
          <option value="">Select Department</option>
          <option value="male">Doctor</option>
          <option value="female">Nurse</option>
          <option value="other">Receptionist</option>
          <option value="other">Cashier</option>
          <option value="other">Other</option>


        </select>

        {userType === "doctor" && (
          <div>{/* Additional fields for doctors */}</div>
        )}
        {userType === "nurse" && (
          <div>{/* Additional fields for nurses */}</div>
        )}

        <button
          type="button"
          onClick={generateLoginInfo}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Generate Login Info
        </button>

        {/* Display generated login info */}
        {loginInfo.username && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Login Information:</h2>
            <p>Username: {loginInfo.username}</p>
            <p>Password: {loginInfo.password}</p>
          </div>
        )}

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
