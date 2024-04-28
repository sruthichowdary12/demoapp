import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './student.css'; // Importing the CSS file for styling
import bgpic from '../assets/bgpic.jpeg';

export default function StudentLogin({ onStudentLogin }) {
  const [formData, setFormData] = useState({
    id: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2014/checkstudentlogin', formData);
      if (response.status === 200) {
        navigate('/student/StudentNavBar');
        onStudentLogin();
        localStorage.setItem('student', JSON.stringify(response.data));
      }
    } catch (error) {
      setMessage('Error in Log In!!');
    }
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={bgpic} alt="Student Login" />
      </div>
      <div className="login-form-container">
        <div className="login-form">
          <h3>Student Login</h3>
          {message && <div className="error-message">{message}</div>}
          <form onSubmit={handleSubmit}>
            <div>
              <label>Student ID</label>
              <input type="number" name="id" value={formData.id} onChange={handleChange} required />
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
