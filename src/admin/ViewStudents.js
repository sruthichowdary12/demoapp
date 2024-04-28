import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config'
export default function ViewStudents() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${config.url}/viewstudents`);
      setStudents(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`${config.url}/deletestudent/${id}`);
      fetchStudents();
    } catch (error) {
      console.error(error.message);
    }
  }

  const viewStudentProfile = async (id) => {
    try {
      navigate(`/viewstudentdetails/${id}`);
      window.location.reload();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div>
      <h1 style={{textAlign: 'center', marginTop: '20px'}}>Students</h1>
      <table border={1} align="center" style={{ width: '80%', borderCollapse: 'collapse', margin: '0 auto'}}>
        <thead>
          <tr>
            <th style={{backgroundColor: '#f2f2f2', border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>ID</th>
            <th style={{backgroundColor: '#f2f2f2', border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Full Name</th>
            <th style={{backgroundColor: '#f2f2f2', border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Gender</th>
            <th style={{backgroundColor: '#f2f2f2', border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Department</th>
            <th style={{backgroundColor: '#f2f2f2', border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Email</th>
            <th style={{backgroundColor: '#f2f2f2', border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(students) && students.length > 0 ? (
            students.map((student, index) => (
              <tr key={index}>
                <td style={{border: '1px solid #ddd', padding: '8px'}}>{student.id}</td>
                <td style={{border: '1px solid #ddd', padding: '8px'}}>{student.fullname}</td>
                <td style={{border: '1px solid #ddd', padding: '8px'}}>{student.gender}</td>
                <td style={{border: '1px solid #ddd', padding: '8px'}}>{student.department}</td>
                <td style={{border: '1px solid #ddd', padding: '8px'}}>{student.email}</td>
                <td style={{border: '1px solid #ddd', padding: '8px'}}>
                  <button onClick={() => viewStudentProfile(student.id)} style={{backgroundColor: '#4CAF50', border: 'none', color: 'white', padding: '8px 12px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '14px', margin: '2px 0', cursor: 'pointer', borderRadius: '4px', transitionDuration: '0.4s'}} className='button'>View</button>&nbsp;&nbsp;
                  <button onClick={() => deleteStudent(student.id)} style={{backgroundColor: '#4CAF50', border: 'none', color: 'white', padding: '8px 12px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '14px', margin: '2px 0', cursor: 'pointer', borderRadius: '4px', transitionDuration: '0.4s'}} className='button'>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" align='center' style={{border: '1px solid #ddd', padding: '8px'}}>Data Not Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}