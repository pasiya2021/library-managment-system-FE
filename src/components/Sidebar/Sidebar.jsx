import React from 'react';
import { FaUser, FaUserPlus, FaShoppingCart, FaWarehouse, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { RiDashboardLine } from 'react-icons/ri';
import Logo from '../../assets/images/Logo.png';

const Sidebar = () => {
  const menuItems = [
    { icon: RiDashboardLine, text: 'Dashboard', path: '/' },
    { icon: FaUser, text: 'Users', path: '/users' },
    { icon: FaUserPlus, text: 'Add User', path: '/add-user', active: true },
    { icon: FaShoppingCart, text: 'View All Books', path: '/orders' },
    { icon: FaWarehouse, text: 'Warehouses', path: '/warehouses' },
  ];

  return (
    <div className="bg-indigo-900 text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <img src={Logo} alt="Zynova Fresh Logo" className="w-32 h-32 mx-auto mb-2" />
      </div>
      <nav>
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.path}
            className={`flex items-center py-2 px-4 rounded ${
              item.active ? 'bg-indigo-800' : 'hover:bg-indigo-800'
            }`}
          >
            <item.icon className="mr-3" />
            {item.text}
          </a>
        ))}
      </nav>
      <div className="mt-auto">
        <a href="/settings" className="flex items-center py-2 px-4 hover:bg-indigo-800 rounded">
          <FaCog className="mr-3" />
          Settings
        </a>
        <a href="/logout" className="flex items-center py-2 px-4 hover:bg-indigo-800 rounded">
          <FaSignOutAlt className="mr-3" />
          Logout
        </a>
      </div>
    </div>
  );
};

export default Sidebar;