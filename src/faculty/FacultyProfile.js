import React, { useState } from 'react';
import './faculty.css'; // Assuming you have a separate CSS file for styling faculty profile
import faculty from '../assets/admin.jpeg';
import ChangeFacultyPwd from './ChangeFacultyPwd'; 

export default function FacultyProfile() {
  const [name, setName] = useState('Faculty');
  const [password, setPassword] = useState('');
  const [courses, setCourses] = useState([
    'Course A: Introduction to React',
    'Course B: Advanced JavaScript',
    'Course C: Web Development Fundamentals',
  ]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log('Selected file:', file);
  };

  return (
    <div className="facultyProfile">
      <div className="profileHeader">
        <h1>Faculty Profile</h1>
      </div>
      <div className="profileContent">
        <div className="profilePicture">
          <img src={faculty} alt="Profile" />
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
          <ChangeFacultyPwd />
        </div>
      </div>
      <div className="profileCourses">
        <h2>Courses Taught:</h2>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}