import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddUserPage from '../pages/AddUserPage/AddUserPage';
import UserTablepage from '../pages/UserTablePage/UserTablePage';
import BookTablepage from '../pages/BookTablePage/BookTablePage';
import Ust from '../components/UserTable/UserTable';


const WebRoutes = () => {
  return (
    <Router>
      <Routes>
       
        <Route path="/add-user" element={<AddUserPage />} />
        <Route path="/users" element={<UserTablepage />} />
        <Route path="/view-all-books" element={<BookTablepage />} />
        
        
      </Routes>
    </Router>
  );
};

export default WebRoutes;