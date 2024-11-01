import BorrowBook from '../../components/BorrowBook/BorrowBook';
import Sidebar from '../../components/Sidebar/Sidebar';

const BorrowBookPage = () => (
  <div className="flex h-screen bg-gray-100">
    <Sidebar />
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <BorrowBook />
      </div>
    </main>
  </div>
);

export default BorrowBookPage;