import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import Axios from 'axios';
import './admin.css'; // Import the CSS file
import config from '../config';

export default function AddStudent() {
  const [formData, setFormData] = useState({
    id: '',
    fullname: '',
    gender: '',
    qualification: '',
    email: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(`${config.url}/addfaculty`, formData);
      if (response.status === 200) {
        setFormData({
          id: '',
          fullname: '',
          gender: '',
          qualification: '',
          email: ''
        });
      }
      setMessage(response.data);
      setError('');
    } catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };

  return (
    <div className="add-student-container">
      <h3 align="center"><u>Add Faculty</u></h3>
      {message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{ color: "red" }}>{error}</h4>}
      <form onSubmit={handleSubmit} className="form-container">
        <Grid container spacing={2}>
          <Grid item xs={12} className="form-field">
            <label htmlFor="id" className="form-label">Faculty ID</label>
            <input type="number" id="id" value={formData.id} onChange={handleChange} className="form-input" required />
          </Grid>
          <Grid item xs={12} className="form-field">
            <label htmlFor="fullname" className="form-label">Full Name</label>
            <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} className="form-input" required />
          </Grid>
          <Grid item xs={12} className="form-field">
            <label htmlFor="gender" className="form-label">Gender</label>
            <select id="gender" value={formData.gender} onChange={handleChange} className="form-select" required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </Grid>
          <Grid item xs={12} className="form-field">
            <label htmlFor="qualification" className="form-label">Qualification</label>
            <input type="text" id="qualification" value={formData.qualification} onChange={handleChange} className="form-input" required />
          </Grid>
          <Grid item xs={12} className="form-field">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} className="form-input" required />
          </Grid>
          <Grid item xs={12} className="form-field">
            <Button type="submit" className="form-button">Add Faculty</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
