import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search } from 'lucide-react';

const API_BASE_URL = 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const BorrowBook = () => {
  const [userName, setUserName] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  const [bookDetails, setBookDetails] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [allBorrows, setAllBorrows] = useState([]);
  const [tableLoading, setTableLoading] = useState(false);
  

  // Fetch all borrows
  const fetchAllBorrows = async () => {
    setTableLoading(true);
    try {
      const { data } = await api.get('/get-all');
      setAllBorrows(data);
    } catch (err) {
      setError('Failed to fetch borrow records');
    } finally {
      setTableLoading(false);
    }
  };

  // Initial fetch of borrows
  useEffect(() => {
    fetchAllBorrows();
  }, []);

  const searchUser = async () => {
    if (!userName.trim()) {
      setError('Please enter a username');
      return;
    }

    setLoading(true);
    try {
      const { data } = await api.get(`/user/find-user/${userName}`);
      setUserDetails(data);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to find user');
      setUserDetails(null);
    } finally {
      setLoading(false);
    }
  };

  const searchBook = async () => {
    if (!bookTitle.trim()) {
      setError('Please enter a book ID');
      return;
    }

    setLoading(true);
    try {
      const { data } = await api.get(`/book/get/${bookTitle}`);
      setBookDetails(data);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to find book');
      setBookDetails(null);
    } finally {
      setLoading(false);
    }
  };

  const handleBorrow = async () => {
    if (!userDetails || !bookDetails) {
      setError('Please search for both user and book first');
      return;
    }

    setLoading(true);
    try {

      const borrowDate = new Date().toISOString(); 
      await api.post('/borrow', {
        userName: userName,
        bookTitle: bookTitle,
        borrowDate: borrowDate,
        status: 'BORROWED',
      });

      setSuccess('Book borrowed successfully!');
      setError('');
      
      // Reset form
      setUserDetails(null);
      setBookDetails(null);
      setUserName('');
      setBookTitle('');
      
      // Refresh the borrows table
      await fetchAllBorrows();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to process borrow request');
      setSuccess('');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Library Management System</h1>
          <p className="text-gray-600">Admin Panel - Borrow Management</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Borrow Form Section */}
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            {/* User Search Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-700">User Search</h2>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Search user by username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                  disabled={loading}
                />
                <button
                  onClick={searchUser}
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-400 flex items-center gap-2 min-w-[100px]"
                >
                  <Search className="w-4 h-4" />
                  Search
                </button>
              </div>

              {userDetails && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-700 mb-3">User Details</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <span className="font-medium text-gray-600">Username:</span>
                      <span className="ml-2 text-gray-800">{userDetails.userName}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Email:</span>
                      <span className="ml-2 text-gray-800">{userDetails.email}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Phone:</span>
                      <span className="ml-2 text-gray-800">{userDetails.phoneNumber}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Country:</span>
                      <span className="ml-2 text-gray-800">{userDetails.country}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Book Search Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-700">Book Search</h2>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Search book by Name"
                  value={bookTitle}
                  onChange={(e) => setBookTitle(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                  disabled={loading}
                />
                <button
                  onClick={searchBook}
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-400 flex items-center gap-2 min-w-[100px]"
                >
                  <Search className="w-4 h-4" />
                  Search
                </button>
              </div>

              {bookDetails && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-700 mb-3">Book Details</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <span className="font-medium text-gray-600">Title:</span>
                      <span className="ml-2 text-gray-800">{bookDetails.title}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Author:</span>
                      <span className="ml-2 text-gray-800">{bookDetails.author}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">ISBN:</span>
                      <span className="ml-2 text-gray-800">{bookDetails.isbn}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Category:</span>
                      <span className="ml-2 text-gray-800">{bookDetails.category}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Borrow Button */}
            {userDetails && bookDetails && (
              <button
                onClick={handleBorrow}
                disabled={loading}
                className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-green-400 transition-colors duration-200"
              >
                {loading ? 'Processing...' : 'Borrow Book'}
              </button>
            )}

            {/* Messages */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
                {success}
              </div>
            )}
          </div>

          {/* Borrows Table Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">All Borrows</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Books
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Borrow Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tableLoading ? (
                    <tr>
                      <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                        Loading...
                      </td>
                    </tr>
                  ) : allBorrows.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                        No borrow records found
                      </td>
                    </tr>
                  ) : (
                    allBorrows.map((borrow, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {borrow.userName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {borrow.bookTitle}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {borrow.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium 
                            ${borrow.status === 'BORROWED' ? 'bg-yellow-100 text-yellow-800' : 
                              borrow.status === 'RETURNED' ? 'bg-green-100 text-green-800' : 
                              'bg-gray-100 text-gray-800'}`}>
                            {borrow.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowBook;