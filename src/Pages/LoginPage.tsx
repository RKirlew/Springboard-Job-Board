import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,useLocation  } from 'react-router-dom';  // Import this
const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/'; 
  const handleLogin = async (e: React.FormEvent) => {
    
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });
      if (response.data !=null){
      console.log('Login successful:', response.data);
      console.log(response.data.role);
      alert("Login success!")
      localStorage.setItem('userEmail', email); // Store email in localStorage
      localStorage.setItem('userRole', response.data.role); // Store  role in localStorage
      navigate(from);
      }else{
        alert("Login failed. Email or password incorrect!")
      }
    } catch (error) {
      console.error('Login error:', error);
     
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <form className="mt-6 max-w-md mx-auto" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
