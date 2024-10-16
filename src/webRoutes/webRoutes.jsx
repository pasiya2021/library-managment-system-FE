import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddUserPage from '../pages/AddUserPage/AddUserPage';
import UserTablePage from '../pages/UserTablePage/UserTablePage';
import BookTablePage from '../pages/BookTablePage/BookTablePage';
import AddBookPage from '../pages/AddBookPage/AddBookPage';



const WebRoutes = () => {
  return (
    <Router>
      <Routes>
       
        <Route path="/add-user" element={<AddUserPage />} />
        <Route path="/users" element={<UserTablePage />} />
        <Route path="/view-all-books" element={<BookTablePage />} />
        <Route path="/add-books" element={<AddBookPage />} />
        
        
      </Routes>
    </Router>
  );
};

export default WebRoutes;