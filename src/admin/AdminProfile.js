import React, { useState, useEffect } from 'react';
import './admin.css'; 
import admin from '../assets/admin.jpeg';
import ChangeAdminPwd from './ChangeAdminPwd';
import config from '../config';
export default function AdminProfile() {
  const [name, setName] = useState('Admin');
  const [password, setPassword] = useState('');
  const [tasks, setTasks] = useState([
    'Task 1: Add new Student',
    'Task 2: Mapping Faculty to Course ',
    'Task 3: Update no.of course hours',
  ]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log('Selected file:', file);
  };

  return (
    <div className="adminProfile">
      <div className="profileHeader">
        <h1>Admin Profile</h1>
      </div>
      <div className="profileContent">
        <div className="profilePicture">
          <img src={admin} alt="Profile" />
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
        <div className="profileDetails">
          <h2>Name: {name}</h2>
          <input
            type="text"
            placeholder="Enter new name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h2>Change Password:</h2>
          <ChangeAdminPwd />
        </div>
      </div>
      <div className="profileTasks">
        <h2>Tasks to Do:</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
