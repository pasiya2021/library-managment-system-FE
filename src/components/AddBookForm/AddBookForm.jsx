import  { useState } from 'react';
import InputField from '../InputField/InputField';
import axios from 'axios';

const AddUserForm = () => {
  const [formData, setFormData] = useState({
    isbn: '',
    title: '',
    author: '',
    category: '',
    qty: '',
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
      const response = await axios.post('http://localhost:8080/book/add', formData);
      console.log("API Response: ", response);  // Log API response for debugging
      setSuccess(true);  // Set success state
      setFormData({       // Reset form fields
        isbn: '',
        title: '',
        author: '',
        category: '',
        qty: '',
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
        isbn: '',
        title: '',
        author: '',
        category: '',
        qty: '',
    });
    setError(null);
    setSuccess(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <InputField label="ISBN" id="isbn" value={formData.isbn} onChange={handleChange} />
      <InputField label="Title" id="title" value={formData.title} onChange={handleChange} />
      <InputField label="Author" id="author" value={formData.author} onChange={handleChange} />
      <InputField label="Category" id="category" value={formData.category} onChange={handleChange} />
      <InputField label="Quantity" id="qty" value={formData.qty} onChange={handleChange} />
    

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


