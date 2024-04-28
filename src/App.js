import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './main/HomePage';
import About from './main/About';
import Features from './main/Features';
import Contact from './main/Contact';
import ChooseUser from './main/ChooseUser';
import Adminlogin from './admin/AdminLogin'; 
import Studentlogin from './student/StudentLogin'; 
import Teacherlogin from './faculty/FacultyLogin'; 
import AdminNavBar from './admin/AdminNavBar';
import StudentNavBar from './student/StudentNavBar';
import FacultyNavBar from './faculty/FacultyNavBar';

function App() {

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isStudentLoggedIn, setIsStudentLoggedIn] = useState(false);
  const [isFacultyLoggedIn, setIsFacultyLoggedIn] = useState(false);

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    const studentLoggedIn = localStorage.getItem('isStudentLoggedIn') === 'true';
    const FacultyLoggedIn = localStorage.getItem('isFacultyLoggedIn') === 'true';
    
    setIsAdminLoggedIn(adminLoggedIn);
    setIsStudentLoggedIn(studentLoggedIn);
    setIsFacultyLoggedIn(FacultyLoggedIn);
  }, []);

  const onAdminLogin = () => {
    localStorage.setItem('isAdminLoggedIn', 'true');
    setIsAdminLoggedIn(true);
  };

  const onStudentLogin = () => {
    localStorage.setItem('isStudentLoggedIn', 'true');
    setIsStudentLoggedIn(true);
  };

  const onFacultyLogin = () => {
    localStorage.setItem('isFacultyLoggedIn', 'true');
    setIsFacultyLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/choose" element={<ChooseUser />} />
        <Route path="/admin/AdminLogin" element={<Adminlogin onAdminLogin={onAdminLogin} />} />
        <Route path="/student/StudentLogin" element={<Studentlogin onStudentLogin={onStudentLogin} />} />
        <Route path="/faculty/FacultyLogin" element={<Teacherlogin onFacultyLogin={onFacultyLogin} />} />
        {/* Add routes for authenticated users */}

      </Routes>
          {isAdminLoggedIn ? (
              <AdminNavBar />
            ) : isStudentLoggedIn ? (
              <StudentNavBar />
            ) : isFacultyLoggedIn ? (
              <FacultyNavBar />
            ) : null}
    </Router>
  );
}

export default App;
