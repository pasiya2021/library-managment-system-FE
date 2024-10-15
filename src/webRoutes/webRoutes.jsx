import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddUserPage from '../pages/AddUserPage/AddUserPage';


const WebRoutes = () => {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<AddUserPage />} />
        
      </Routes>
    </Router>
  );
};

export default WebRoutes;