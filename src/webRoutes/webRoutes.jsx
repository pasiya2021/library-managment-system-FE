import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddUserPage from '../pages/AddUserPage/AddUserPage';
import UserTable from '../pages/UserTablePage/UserTablePage';
import Ust from '../components/UserTable/UserTable';


const WebRoutes = () => {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<AddUserPage />} />
        <Route path="users" element={<UserTable />} />
        
        
      </Routes>
    </Router>
  );
};

export default WebRoutes;