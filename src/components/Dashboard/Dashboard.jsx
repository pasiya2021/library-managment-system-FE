import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const bookData = [
    { name: 'Fiction', value: 40 },
    { name: 'Non-Fiction', value: 30 },
    { name: 'Biography', value: 20 },
    { name: 'Other', value: 10 },
  ];

  const booksArriveData = [
    { name: 'Jan', value: 100 },
    { name: 'Feb', value: 80 },
    { name: 'Mar', value: 120 },
    { name: 'Apr', value: 90 },
    { name: 'May', value: 110 },
    { name: 'Jun', value: 130 },
  ];

  return (
    <div className="flex h-screen">
      <div className="flex-1 p-6 space-y-6">
        <h1 className="text-2xl font-bold">Welcome Back!</h1>
    
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Available Books</h2>
            <button className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-600">
              View More
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-4">
            <div className="bg-white shadow-md rounded p-4">
              <img src="https://wpimg.pixelied.com/blog/wp-content/uploads/2021/05/11190750/Simple-Illustration-Typography-Book-Cover-1.jpg" alt="Book 1" className="w-full h-40 object-cover rounded-t" />
              <h3 className="text-lg font-bold mt-2">All This Time</h3>
              <p className="text-gray-500">Fiction</p>
            </div>
            <div className="bg-white shadow-md rounded p-4">
              <img src="https://atmospherepress.com/wp-content/uploads/2023/09/Garg-2-Cover-Project-front-jpg-672x1024.webp" alt="Book 2" className="w-full h-40 object-cover rounded-t" />
              <h3 className="text-lg font-bold mt-2">Linden Wood</h3>
              <p className="text-gray-500">Non-Fiction</p>
            </div>
            <div className="bg-white shadow-md rounded p-4">
              <img src="https://images.squarespace-cdn.com/content/v1/5fc7868e04dc9f2855c99940/32f738d4-e4b9-4c61-bfc0-e813699cdd3c/laura-barrett-illustrator-beloved-girls-book-cover.jpg" alt="Book 1" className="w-full h-40 object-cover rounded-t" />
              <h3 className="text-lg font-bold mt-2">The Belvod Girls</h3>
              <p className="text-gray-500">Fiction</p>
            </div>
            <div className="bg-white shadow-md rounded p-4">
              <img src="https://static01.nyt.com/images/2014/02/05/books/05before-and-after-slide-T6H2/05before-and-after-slide-T6H2-superJumbo.jpg?quality=75&auto=webp&disable=upscale" alt="Book 2" className="w-full h-40 object-cover rounded-t" />
              <h3 className="text-lg font-bold mt-2">Andy Wier</h3>
              <p className="text-gray-500">Non-Fiction</p>
            </div>
          </div>
        </div>


        <div>
          <h2 className="text-xl font-bold">Data Analysis</h2>
          <div className="grid grid-cols-3 gap-4 mt-4">

            <div className="bg-white shadow-md rounded p-4">
              <h3 className="text-lg font-bold">New Users</h3>
              <p className="text-4xl font-bold">32</p>
              <img src="https://img.freepik.com/free-vector/lo-fi-concept-illustration_114360-8829.jpg?t=st=1731430843~exp=1731434443~hmac=f2d25251985ca8b0d5f2cada2eea8f16d330950427810c6f1aedb974fb29d4aa&w=1480" alt="New Users Illustration" className="w-full h-32 object-cover rounded mt-2" />
            </div>
            <div className="bg-white shadow-md rounded p-4">
              <h3 className="text-lg font-bold">New Books</h3>
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold">32</div>
                <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded">
                  <span className="font-bold">25%</span> increase
                </div>
              </div>
              <img src="https://img.freepik.com/free-vector/internship-job-training-illustration_23-2148753207.jpg?t=st=1731430354~exp=1731433954~hmac=3389e3074b495017ddd47ca64b2f8f86f22f3b807f8aae8ed28382389977a57c" alt="New Books Illustration" className="w-full h-32 object-cover rounded mt-2" />
            </div>
            <div className="bg-white shadow-md rounded p-4">
              <h3 className="text-lg font-bold">Books Arrive</h3>
              <div className="h-32">
                <LineChart width={300} height={200} data={booksArriveData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-white shadow-md rounded p-4">
              <h3 className="text-lg font-bold">Book Categories</h3>
              <PieChart width={400} height={400}>
                <Pie data={bookData} dataKey="value" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
                  {bookData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#8884d8', '#82ca9d', '#ffc658', '#ff7300'][index % 4]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
            <div className="bg-white shadow-md rounded p-4">
              <h3 className="text-lg font-bold">New Books</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <img src="https://rocketexpansion.com/wp-content/uploads/2021/11/Haven-fall.jpg" alt="Book 3" className="w-full h-40 object-cover rounded" />
                  <h4 className="text-lg font-bold mt-2">Haven Fall</h4>
                  <p className="text-gray-500">Fiction</p>
                </div>
                <div>
                  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9e900977498153.5c894067aa524.jpg" alt="Book 4" className="w-full h-40 object-cover rounded" />
                  <h4 className="text-lg font-bold mt-2">Bella</h4>
                  <p className="text-gray-500">Non-Fiction</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;