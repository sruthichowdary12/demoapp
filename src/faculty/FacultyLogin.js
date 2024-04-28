import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './faculty.css'; // Importing the CSS file for styling
import bgpic from '../assets/bgpic.jpeg';

export default function FacultyLogin({ onFacultyLogin }) {
  const [formData, setFormData] = useState({
    id: '',
    password: ''
  });
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2014/checkfacultylogin', formData);
      if (response.status === 200) {
        navigate('/faculty/FacultyNavBar');
        onFacultyLogin(); 
        localStorage.setItem('faculty', JSON.stringify(response.data));
      }
    } catch (error) {
      setMessage("Error in Log In!!");
    }
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={bgpic} alt="Faculty Login" />
      </div>
      <div className="login-form-container">
        <div className="login-form">
          <h3>Faculty Login</h3>
          {message && <div className="error-message">{message}</div>}
          <form onSubmit={handleSubmit}>
            <div>
              <label>Faculty ID</label>
              <input type="text" name="id" value={formData.id} onChange={handleChange} required />
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
