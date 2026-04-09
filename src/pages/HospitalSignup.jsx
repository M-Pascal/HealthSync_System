import React, { useState } from "react";
import { Switch } from "@headlessui/react";

const HospitalSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return false;
    }
    // Submit the form data or perform other actions
    console.log("Form submitted");
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-start px-6 py-56 lg:py-24 lg:px-8 bg-[#011c36]">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <a href="/">
          <img
            className="mx-auto h-auto w-auto"
            src="./src/assets/logo.png"
            alt="Logo"
          />
        </a>
        <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-50">
          Create an account
        </h2>
      </div>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <form
        className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-white"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
        <div className="mb-4 mt-4">
          <label htmlFor="hospitalName" className="block mb-1">
            Hospital Name
          </label>
          <input
            type="text"
            id="hospitalName"
            value={hospitalName}
            onChange={(e) => setHospitalName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-[#00aeef] font-bold px-4 py-2 rounded-md mt-5 sm:mx-auto sm:w-full sm:max-w-sm text-white transition hover:bg-blue-500"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default HospitalSignup;
