import Sidebar from '../../components/Sidebar/Sidebar';
import Illustration from '../../components/Illustration/Illustration';
import AddBookForm from '../../components/AddBookForm/AddBookForm';

const AddUserPage = () => (
  <div className="flex min-h-screen bg-gray-100">
    <Sidebar />
    <div className="flex-1 p-10">
      <h1 className="text-3xl font-bold mb-4">Add User</h1>
      <p className="mb-8 text-gray-600">Add user&apos;s information here</p>
      <div className="flex bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="w-1/2 pr-4">
          <h2 className="text-xl font-semibold mb-4">User</h2>
          <p className="mb-4 text-gray-600">Add user&apos;s personal information here</p>
          <AddBookForm />
        </div>
        <div className="w-1/2 pl-4 flex items-center justify-center">
          <Illustration />
        </div>
      </div>
    </div>
  </div>
);

export default AddUserPage;