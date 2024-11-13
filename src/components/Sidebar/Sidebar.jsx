import { FaUser, FaUserPlus, FaShoppingCart, FaWarehouse, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { RiDashboardLine } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';

const Sidebar = () => {
  const location = useLocation(); // Get current location

  const menuItems = [
    
    { icon: RiDashboardLine, text: 'Dashboard', path: '/dashboard' },
    { icon: FaUser, text: 'Users', path: '/users' },
    { icon: FaUserPlus, text: 'Add User', path: '/add-user' },
    { icon: FaShoppingCart, text: 'View All Books', path: '/view-all-books' },
    { icon: FaWarehouse, text: 'Add Books', path: '/add-books' },
    { icon: FaCog, text: 'Borrow Books', path: '/borrow' },
    { icon: FaSignOutAlt, text: 'Logout', path: '/' },
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
              location.pathname === item.path ? 'bg-indigo-800' : 'hover:bg-indigo-800'
            }`}
          >
            <item.icon className="mr-3" />
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
