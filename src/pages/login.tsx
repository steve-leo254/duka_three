import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/login", formData);
      console.log("Login successful:", response.data);
      const responseData: { access_token: string } = response.data;
      localStorage.setItem("token", responseData.access_token);
      localStorage.setItem("isLoggedIn", "true");

      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="bg-banner-image bg-cover h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="lg:w-[450px] bg-white py-20 px-10 rounded-bl-[40px] rounded-se-[40px]">
          <h1 className="text-4xl text-blue-900 text-center mb-6 transition-all">Login</h1>
          <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                <div className="mt-1">
                  <IoPerson className="inline-block mr-2" />
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                <div className="mt-1">
                  <RiLockPasswordFill className="inline-block mr-2" />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Login
              </button>
              {error && <p className="mt-2 text-red-600">{error}</p>}
              <p className="mt-4">
                Don't have an account? <Link to="/register" className="text-indigo-600 hover:text-indigo-800">Register</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;