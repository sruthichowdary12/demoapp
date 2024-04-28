import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ViewCourses() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:2014/viewcourses');
      setCourses(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  const viewCourseDetails = async (courseid) => {
    try {
      navigate(`/viewcourses/${courseid}`);
      window.location.reload();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
      {Array.isArray(courses) && courses.length > 0 ? (
        courses.map((course, index) => (
          <div key={index} style={{ width: '300px', margin: '10px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '5px', overflow: 'hidden' }}>
            <div style={{ padding: '20px' }}>
              <h2>{course.coursename}</h2>
              <p>Course ID: {course.courseid}</p>
              <p>Hours: {course.hours}</p>
              <button onClick={() => viewCourseDetails(course.courseid)} style={{ backgroundColor: '#4CAF50', border: 'none', color: 'white', padding: '10px 20px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer', borderRadius: '5px', transitionDuration: '0.4s' }}>View Details</button>
            </div>
          </div>
        ))
      ) : (
        <div style={{ textAlign: 'center' }}>Data Not Found</div>
      )}
    </div>
  );
}
