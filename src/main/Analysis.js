import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stud from '../assets/stud.gif'
import Teach from '../assets/teach.gif'
import Course from '../assets/course.gif'

const Analysis = () => {
  const [StudentCount, setStudentCount] = useState(0);
  const [FacultyCount, setFacultyCount] = useState(0);
  const [CourseCount, setCourseCount] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:2014/analysis');
        const { StudentCount, FacultyCount, CourseCount } = response.data;
        setStudentCount(StudentCount);
        setFacultyCount(FacultyCount);
        setCourseCount(CourseCount);
      } catch (error) {
        setError('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const boxStyle = {
    width: '200px',
    height: '250px',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const gifStyle = {
    width: '100px',
    height: '100px',
    marginBottom: '20px',
  };

  const errorStyle = {
    color: 'red',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      {error ? (
        <p style={errorStyle}>{error}</p>
      ) : (
        <>
          <div style={boxStyle}>
            <img src={Stud} alt="students gif" style={gifStyle} />
            <h2>Students</h2>
            <p>{StudentCount}</p>
          </div>
          <div style={boxStyle}>
            <img src={Teach} alt="faculties gif" style={gifStyle} />
            <h2>Faculties</h2>
            <p>{FacultyCount}</p>
          </div>
          <div style={boxStyle}>
            <img src={Course} alt="courses gif" style={gifStyle} />
            <h2>Courses</h2>
            <p>{CourseCount}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Analysis;