import React, { useState } from 'react';
import InputField from '../InputField/InputField';
import { api, API_ENDPOINTS } from '../../config/api'; 
import axios from 'axios';

const AddUserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    address: '',
    phoneNumber: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle form data changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Send POST request to API endpoint
      const response = await axios.post('http://localhost:8080/user/add-user', formData);
      console.log("API Response: ", response);  // Log API response for debugging
      setSuccess(true);  // Set success state
      setFormData({       // Reset form fields
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        address: '',
        phoneNumber: ''
      });
    } catch (err) {
      console.error("API Error: ", err);  // Log any errors
      if (!err.response) {
        setError("Network error: Unable to reach the server.");
      } else {
        setError(err.response?.data?.message || 'Failed to add user.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form reset (discard changes)
  const handleDiscard = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      address: '',
      phoneNumber: ''
    });
    setError(null);
    setSuccess(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <InputField label="First Name" id="firstName" value={formData.firstName} onChange={handleChange} />
      <InputField label="Last Name" id="lastName" value={formData.lastName} onChange={handleChange} />
      <InputField label="User Name" id="userName" value={formData.userName} onChange={handleChange} />
      <InputField label="Email" type="email" id="email" value={formData.email} onChange={handleChange} />
      <InputField label="Address" id="address" value={formData.address} onChange={handleChange} />
      <InputField label="Phone No" type="tel" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">User added successfully!</p>}
      
      <div className="flex items-center justify-between">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleDiscard}
        >
          Discard
        </button>
        <button
          className={`bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Adding...' : 'Add'}
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;


// import React from 'react';
// import InputField from '../InputField/InputField';

// const AddUserForm = () => (
//   <form className="w-full max-w-lg">
//     <InputField label="First Name" />
//     <InputField label="Last Name" />
//     <InputField label="Email" type="email" />
//     <InputField label="userName" />
//     <InputField label="Address" />
//     <InputField label="Phone No" type="tel" />
//     <div className="flex items-center justify-between">
//       <button
//         className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         type="button"
//       >
//         Discard
//       </button>
//       <button
//         className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         type="submit"
//       >
//         Add
//       </button>
//     </div>
//   </form>
// );

// export default AddUserForm;