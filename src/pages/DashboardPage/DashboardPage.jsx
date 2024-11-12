import Dashboard from '../../components/Dashboard/Dashboard';
import Sidebar from '../../components/Sidebar/Sidebar';

const DashboardPage = () => (
  <div className="flex h-screen bg-gray-100">
    <Sidebar />
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <Dashboard />
      </div>
    </main>
  </div>
);

export default DashboardPage;