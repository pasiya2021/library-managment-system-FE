import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import illustrationImage from '../../assets/images/rb_64279.png';
const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden flex">
        {/* Left Panel */}
        <div className="w-2/5 bg-indigo-900 p-8 flex flex-col hidden md:block">
          <div className="text-white">
            <div className="mb-2">Hello!</div>
            <h1 className="text-4xl font-bold mb-8">HAVE A<br />NICE DAY</h1>
          </div>
          <div className="mt-auto">
            <img 
              src={illustrationImage} 
              alt="Person working" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 p-8">
          <div className="flex justify-end mb-4">
            <select className="bg-transparent border-none text-gray-600 focus:ring-0">
              <option>English(UK)</option>
              <option>English(US)</option>
            </select>
          </div>

          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8">Create Account</h2>

            <form className="space-y-6">
              <div><input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"/></div>
              <div><input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"/></div>

              <div className="relative">
                <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"/>
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="relative">
                <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"/>
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <button type="submit" className="w-full bg-indigo-900 text-white py-3 rounded-lg hover:bg-indigo-800 transition-colors font-medium">
                Create Account
              </button>

              <div className="text-center text-sm">
                <span className="text-gray-600">Do you have an account? </span>
                <a href="#" className="text-indigo-600 hover:underline">Login here</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;