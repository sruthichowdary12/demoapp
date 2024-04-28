import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config'
export default function ViewCourses() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${config.url}/viewcourses`);
      setCourses(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  const deleteCourse = async (courseid) => {
    try {
      await axios.delete(`${config.url}/deletecourse/${courseid}`);
      fetchCourses();
    } catch (error) {
      console.error(error.message);
    }
  }

  const viewCourseDetails = async (courseid) => {
    try {
      navigate(`/viewcourses/${courseid}`);
      window.location.reload();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div>
      <h1 style={{textAlign: 'center', marginTop: '20px'}}>Courses</h1>
      <table border={1} align="center" style={{ width: '80%', borderCollapse: 'collapse', margin: '0 auto'}}>
        <thead>
          <tr>
            <th style={{backgroundColor: '#f2f2f2', border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Course ID</th>
            <th style={{backgroundColor: '#f2f2f2', border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Course Name</th>
            <th style={{backgroundColor: '#f2f2f2', border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Hours</th>
            <th style={{backgroundColor: '#f2f2f2', border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(courses) && courses.length > 0 ? (
            courses.map((course, index) => (
              <tr key={index}>
                <td style={{border: '1px solid #ddd', padding: '8px'}}>{course.courseid}</td>
                <td style={{border: '1px solid #ddd', padding: '8px'}}>{course.coursename}</td>
                <td style={{border: '1px solid #ddd', padding: '8px'}}>{course.hours}</td>
                <td style={{border: '1px solid #ddd', padding: '8px'}}>
                  <button onClick={() => viewCourseDetails(course.courseid)} style={{backgroundColor: '#4CAF50', border: 'none', color: 'white', padding: '8px 12px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '14px', margin: '2px 0', cursor: 'pointer', borderRadius: '4px', transitionDuration: '0.4s'}} className='button'>View</button>&nbsp;&nbsp;
                  <button onClick={() => deleteCourse(course.courseid)} style={{backgroundColor: '#4CAF50', border: 'none', color: 'white', padding: '8px 12px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '14px', margin: '2px 0', cursor: 'pointer', borderRadius: '4px', transitionDuration: '0.4s'}} className='button'>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" align='center' style={{border: '1px solid #ddd', padding: '8px'}}>Data Not Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}