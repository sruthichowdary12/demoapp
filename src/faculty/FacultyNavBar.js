import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import './faculty.css'; // Assuming you have a separate CSS file for styling faculty dashboard components

import FacultyHome from './FacultyHome';
import FacultyProfile from './FacultyProfile';
import ViewCoursesbyFaculty from '../faculty/ViewCoursesbyFaculty';
import ViewStudents from '../admin/ViewStudents'
import ViewStudentDetails from '../admin/ViewStudentDetails';
import ViewCourseDetailsbyFaculty from './ViewCourseDetailsbyFaculty';

export default function FacultyNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isFacultyLoggedIn');
    localStorage.removeItem('faculty');
    navigate('/choose');
    window.location.reload();
  };

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/FacultyHome">Home</Link></li>
          <li><Link to="/FacultyProfile">Profile</Link></li>
          <li><Link to="/faculty/ViewCourses">View Courses</Link></li>
          <li><Link to="/admin/ViewStudents">View Students</Link></li>
    
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>

      <Routes>
      <Route path="/faculty/FacultyNavBar" element={<FacultyHome />} />
        <Route path="/FacultyHome" element={<FacultyHome />} />
        <Route path="/FacultyProfile" element={<FacultyProfile />} />
        <Route path="/faculty/ViewCourses" element={<ViewCoursesbyFaculty />} />
        <Route path="/admin/ViewStudents" element={<ViewStudents/>} />
        <Route path="/viewstudentdetails/:id" element={<ViewStudentDetails />} />
        <Route path="/viewcourses/:courseid" element={<ViewCourseDetailsbyFaculty />} />
        
      </Routes>
    </div>
  );
}