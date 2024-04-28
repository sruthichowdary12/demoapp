import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import './student.css'; // Assuming you have a separate CSS file for styling student dashboard components
import StudentHome from './StudentHome';
import StudentProfile from './StudentProfile';
import ViewCourses from './ViewCoursesbyStudent';
import ViewCourseDetails from './ViewCourseDetails';
import AddAssignment from './AddAssignment';

export default function StudentNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isStudentLoggedIn');
    localStorage.removeItem('student');
    navigate('/choose');
    window.location.reload();
  };

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/StudentHome">Home</Link></li>
          <li><Link to="/StudentProfile">Profile</Link></li>
          <li><Link to="/student/ViewCourses">View Courses</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>

      <Routes>
      <Route path="/student/StudentNavBar" element={<StudentHome />} />
        <Route path="/StudentHome" element={<StudentHome />} />
        <Route path="/StudentProfile" element={<StudentProfile />} />
        <Route path="/student/ViewCourses" element={<ViewCourses />} />
        <Route path="/viewcourses/:courseid" element={<ViewCourseDetails />} />
        <Route path="/addassignment" element={<AddAssignment/>} />
      </Routes>
    </div>
  );
}
