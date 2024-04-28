import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './flashcard.css';

export default function ViewCourseDetails() {
  const [courseDetails, setCourseDetails] = useState(null);
  const { courseid } = useParams(); // Access courseid from URL parameters

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:2014/viewcoursebyid/${courseid}`);
        setCourseDetails(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCourseDetails();
  }, [courseid]);

  const handleAssignmentSubmission = (co) => {
    // Implement submission logic here, e.g., navigate to a submission page
    console.log(`Submit assignment for CO ${co}`);
  };

  return (
    <div>
      <h2>Course Details for Course Code: {courseid}</h2>
      {courseDetails && (
        <div>
          <h3>Course Name: {courseDetails.coursename}</h3>
          <h4>Course Description: {courseDetails.description}</h4>
          {/* Add other course details as needed */}
        </div>
      )}
      <div>
        <h3>Course Outcomes:</h3>
        {/* Render flashcards for 4 COs */}
        <div className="flashcards">
          {Array.from({ length: 4 }, (_, index) => (
            <div className="flashcard" key={`co-${index + 1}`}>
              CO {index + 1}
              <button onClick={() => handleAssignmentSubmission(`CO ${index + 1}`)}>Submit Assignment</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
