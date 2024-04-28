import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import config from '../config'
export default function ViewFacultyDetails() {
  const [facultyDetails, setFacultyDetails] = useState(null);
  const { id } = useParams(); // Access student id from URL parameters

  useEffect(() => {
    const fetchFacultyDetails = async () => {
      try {
        const response = await axios.get(`${config.url}/viewfacultybyid/${id}`);
        setFacultyDetails(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchFacultyDetails();
  }, [id]);

  return (
    <div>
      <h2>Faculty Details: {id}</h2>
      {facultyDetails && (
        <div>
          <p><strong>Faculty ID:</strong> {facultyDetails._id}</p>
          <p><strong>Faculty Name:</strong> {facultyDetails.fullname}</p>
          <p><strong>Department:</strong> {facultyDetails.department}</p>
          {/* Add other student details as needed */}
        </div>
      )}
    </div>
  );
}
