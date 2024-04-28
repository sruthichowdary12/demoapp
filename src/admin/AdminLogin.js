
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './admin.css'; // Importing the CSS file for styling
import bgpic from '../assets/bgpic.jpeg'
import config from '../config';
export default function AdminLogin({ onAdminLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/checkadminlogin`, formData);
      // console.log(response)
      if (response.status === 200) 
      {
        // console.log("Navigating...")
        navigate('/admin/AdminNavBar')
        onAdminLogin(); 
        
       
        localStorage.setItem('admin', JSON.stringify(response.data));
        
      }
    } catch (error) {
        setMessage("Error in Log In!!")
    }
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={bgpic} alt="Admin Login" />
      </div>
      <div className="login-form-container">
        <div className="login-form">
          <h3>Admin Login</h3>
          {message && <div className="error-message">{message}</div>}
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange} required />
            </div>
            <div>
              <label>Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
