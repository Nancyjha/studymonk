import React, { useState } from 'react';
 
const LoginForm = () => {
  const [formData, setFormData] = useState({
     email: '',
    password: '',
   });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission delay for 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    console.log(formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
     
  return (
    <div className="min-h-screen flex items-center justify-center bg-black-700 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full content-center bg-white rounded-lg shadow-xl p-8 neumorphic-input">
      <div>
        <h2 className="text-3xl font-bold  text-white-900 mb-4"> LogIn Here</h2>
      </div>
      <form className="space-y-4 " onSubmit={handleSubmit}>
         
          <div>
            <label htmlFor="email" className="block text-white-700 font-medium">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="neumorphic-input w-full rounded-lg"
               onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-white-700 font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="neumorphic-input w-full rounded-lg"
               onChange={handleChange}
              />
          </div>
           <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`group  relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  bg-orange-300 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                isSubmitting ? 'cursor-not-allowed opacity-50' : ''
              }`}
            >
              {isSubmitting ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                ><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            ) : (
              'Register'
            )}
          </button>
        </div>
      </form>
      <h2 className='my-5'>Not Registered yet?  <a
              href="/register">
                Register
            </a></h2>
    </div>
  </div>
  );
};
  
export default  LoginForm;

