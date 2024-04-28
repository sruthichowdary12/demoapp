import React, { useState, useEffect } from 'react';
import './student.css'; // Assuming you have a separate CSS file for styling student profile
import student from '../assets/admin.jpeg';
import ChangeStudentPwd from './ChangeStudentPwd'; 

export default function StudentProfile() {
  const [name, setName] = useState('Student');
  const [password, setPassword] = useState('');
  const [tasks, setTasks] = useState([
    'Task 1: Complete Assignment for Course A',
    'Task 2: Prepare for Exam in Course B',
    'Task 3: Attend Seminar in Course C',
  ]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log('Selected file:', file);
  };

  return (
    <div className="studentProfile">
      <div className="profileHeader">
        <h1>Student Profile</h1>
      </div>
      <div className="profileContent">
        <div className="profilePicture">
          <img src={student} alt="Profile" />
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
          <ChangeStudentPwd />
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