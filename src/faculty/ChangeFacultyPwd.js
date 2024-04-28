import React, { useState, useEffect } from 'react';
import './faculty.css'; // Assuming you have a separate CSS file for styling faculty profile
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ChangeFacultyPwd() {
  const [facultyData, setFacultyData] = useState("");

  useEffect(() => {
    const storedFacultyData = localStorage.getItem('faculty');
    if (storedFacultyData) {
      const parsedFacultyData = JSON.parse(storedFacultyData);
      setFacultyData(parsedFacultyData);
    }
  }, []);

  const [formData, setFormData] = useState({
    oldpassword: '',
    newpassword: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:2014/changefacultypwd', {...formData, "username": facultyData.username});
      if (response.data != null) {
        localStorage.removeItem('isFacultyLoggedIn');
        localStorage.removeItem('faculty');
        navigate('/faculty/FacultyLogin');
        window.location.reload();
      } else {
        setMessage("Old Password is Incorrect");
        setError("");
      }
    } catch (error) {
      setMessage("");
      setError(error.response.data);
    }
  };

  return (
    <div>
      <h3 align="center"><u>Change Password</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{color:"red"}}>{error}</h4>
      }
      <form onSubmit={handleSubmit}>
        <div>
          <label>Old Password</label>
          <input type="password" id="oldpassword" value={formData.oldpassword} onChange={handleChange} required />
        </div>
        <div>
          <label>New Password</label>
          <input type="password" id="newpassword" value={formData.newpassword} onChange={handleChange} required />
        </div>
        <input type="submit" value="Change" className="button"/>
      </form>
    </div>
  );
}
