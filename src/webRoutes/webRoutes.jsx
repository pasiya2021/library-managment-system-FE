import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddUserPage from '../pages/AddUserPage/AddUserPage';
import UserTablePage from '../pages/UserTablePage/UserTablePage';
import BookTablePage from '../pages/BookTablePage/BookTablePage';
import AddBookPage from '../pages/AddBookPage/AddBookPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import BorrowBookPage from '../pages/BorrowBookPage/BorrowBookPage';



const WebRoutes = () => {
  return (
    <Router>
      <Routes>
       
        <Route path="/add-user" element={<AddUserPage />} />
        <Route path="/users" element={<UserTablePage />} />
        <Route path="/view-all-books" element={<BookTablePage />} />
        <Route path="/add-books" element={<AddBookPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/borrow" element={<BorrowBookPage />} />
        
      </Routes>
    </Router>
  );
};

export default WebRoutes; 