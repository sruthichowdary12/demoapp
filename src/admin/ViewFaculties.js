import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config'
export default function ViewFaculties() {
  const navigate = useNavigate();
  const [faculties, setFaculties] = useState([]);

  const fetchFaculties = async () => {
    try {
      const response = await axios.get(`${config.url}/viewfaculties`);
      setFaculties(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchFaculties();
  }, []);

  const deleteFaculty = async (id) => {
    try {
      await axios.delete(`${config.url}/deletefaculty/${id}`);
      fetchFaculties();
    } catch (error) {
      console.error(error.message);
    }
  }

  const viewFacultyProfile = async (id) => {
    try {
      navigate(`/viewfacultyprofile/${id}`);
      window.location.reload();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div>
      <h1 style={{textAlign: 'center', marginTop: '20px'}}>Faculties</h1>
      <table border={1} align="center" style={{ width: '80%', borderCollapse: 'collapse', margin: '0 auto'}}>
        <thead>
          <tr>
            <th style={{backgroundColor: '#f2f2f2', border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>ID</th>
            <th style={{backgroundColor: '#f2f2f2', border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Full Name</th>
            <th style={{backgroundColor: '#f2f2f2', border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Gender</th>
            <th style={{backgroundColor: '#f2f2f2', border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Qualification</th>
            <th style={{backgroundColor: '#f2f2f2', border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Email</th>
            <th style={{backgroundColor: '#f2f2f2', border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(faculties) && faculties.length > 0 ? (
            faculties.map((faculty, index) => (
              <tr key={index}>
                <td style={{border: '1px solid #ddd', padding: '8px'}}>{faculty.id}</td>
                <td style={{border: '1px solid #ddd', padding: '8px'}}>{faculty.fullname}</td>
                <td style={{border: '1px solid #ddd', padding: '8px'}}>{faculty.gender}</td>
                <td style={{border: '1px solid #ddd', padding: '8px'}}>{faculty.qualification}</td>
                <td style={{border: '1px solid #ddd', padding: '8px'}}>{faculty.email}</td>
                <td style={{border: '1px solid #ddd', padding: '8px'}}>
                  <button onClick={() => viewFacultyProfile(faculty.id)} style={{backgroundColor: '#4CAF50', border: 'none', color: 'white', padding: '8px 12px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '14px', margin: '2px 0', cursor: 'pointer', borderRadius: '4px', transitionDuration: '0.4s'}} className='button'>View</button>&nbsp;&nbsp;
                  <button onClick={() => deleteFaculty(faculty.id)} style={{backgroundColor: '#4CAF50', border: 'none', color: 'white', padding: '8px 12px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '14px', margin: '2px 0', cursor: 'pointer', borderRadius: '4px', transitionDuration: '0.4s'}} className='button'>Delete</button>
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