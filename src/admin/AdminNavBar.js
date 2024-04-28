import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import './admin.css';

import AdminHome from './AdminHome';
import AdminProfile from './AdminProfile';
import AddStudent from './AddStudent';
import ViewStudents from './ViewStudents';
import AddFaculty from './AddFaculty';
import ViewFaculties from './ViewFaculties';
import AddCourse from './AddCourse';
import ViewCourses from './ViewCourses';
import ViewStudentDetails from './ViewStudentDetails';
import ViewFacultyDetails from './ViewFacultyDetails';

export default function AdminNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/choose');
    window.location.reload();
  };

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/AdminHome">Home</Link></li>
          <li><Link to="/AdminProfile">Profile</Link></li>
          <li className="dropdown">
            <a href="#" className="dropbtn">Students</a>
            <div className="dropdown-content">
              <Link to="/AddStudent">Add Student</Link>
              <Link to="/ViewStudents">View Students</Link>
            </div>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">Faculty</a>
            <div className="dropdown-content">
              <Link to="/AddFaculty">Add Faculty</Link>
              <Link to="/ViewFaculties">View Faculties</Link>
            </div>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">Courses</a>
            <div className="dropdown-content">
              <Link to="/AddCourse">Add Course</Link>
              <Link to="/ViewCourses">View Course</Link>
              <Link to ="/viewmaterial">View Material</Link>
            </div>
          </li>
          <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>

      <Routes>
      <Route path="/admin/AdminNavBar" element={<AdminHome />} />
        <Route path="/" element={<AdminHome />} />
        <Route path="/AdminHome" element={<AdminHome />} />
        <Route path="/AdminProfile" element={<AdminProfile />} />
        <Route path="/AddStudent" element={<AddStudent />} />
        <Route path="/ViewStudents" element={<ViewStudents />} />
        <Route path="/AddFaculty" element={<AddFaculty />} />
        <Route path="/ViewFaculties" element={<ViewFaculties />} />
        <Route path="/AddCourse" element={<AddCourse />} />
        <Route path="/ViewCourses" element={<ViewCourses />} />
        <Route path="/viewstudentdetails/:id" element={<ViewStudentDetails />} />
        <Route path="/viewfacultyprofile/:id" element={<ViewFacultyDetails />} />
      </Routes>
    </div>
  );
}

