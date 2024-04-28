import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import config from '../config'
export default function ViewStudentDetails() {
  const [studentDetails, setStudentDetails] = useState(null);
  const { id } = useParams(); // Access student id from URL parameters

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get(`${config.url}/viewstudentbyid/${id}`);
        setStudentDetails(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchStudentDetails();
  }, [id]);

  return (
    <div>
      <h2>Student Details: {id}</h2>
      {studentDetails && (
        <div>
          <p><strong>Student ID:</strong> {studentDetails._id}</p>
          <p><strong>Student Name:</strong> {studentDetails.fullname}</p>
          <p><strong>Department:</strong> {studentDetails.department}</p>
          {/* Add other student details as needed */}
        </div>
      )}
    </div>
  );
}
