import React from 'react';
import UserTable from '../../components/UserTable/UserTable';
import Sidebar from '../../components/Sidebar/Sidebar';

const UserTablePage = () => (
  <div className="flex h-screen bg-gray-100">
    <Sidebar />
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <h3 className="text-gray-700 text-3xl font-medium">User Table</h3>
        <UserTable />
      </div>
    </main>
  </div>
);

export default UserTablePage;