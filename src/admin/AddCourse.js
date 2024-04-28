import React, { useState } from 'react';
import { Button, Divider, FormLabel, Paper, TextField } from "@mui/material";
import Axios from 'axios';
import config from '../config';
export default function AddCourses() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(false);
  const [manualCourse, setManualCourse] = useState({
    courseid: '',
    coursename: '',
    hours: ''
  });

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('csvFile', file); // Ensure that the key matches the expected key on the server side

    try {
      await Axios.post(`${config.url}/uploadCourse`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setStatus(true); // Set status to true after successful upload
    } catch (error) {
      console.error('Error uploading data:', error);
    }
  };

  const handleManualAddition = async () => {
    try {
      await Axios.post(`${config.url}/addcourse`, manualCourse);
      console.log('Manual course added successfully!');
      setStatus(true);
    } catch (error) {
      console.error('Error adding manual course:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={6} style={{ width: '50%', padding: 20 }}>
        <h4 style={{ color: '#27005D', marginBottom: 20 }}>Add Courses</h4>
        <Divider sx={{ backgroundColor: "#AED2FF" }} />
        <div style={{ marginBottom: 20 }}>
          <FormLabel>Add Course Manually:</FormLabel>
          <TextField label="Course ID" value={manualCourse.courseid} onChange={(e) => setManualCourse({ ...manualCourse, courseid: e.target.value })} fullWidth />
          <TextField label="Course Name" value={manualCourse.coursename} onChange={(e) => setManualCourse({ ...manualCourse, coursename: e.target.value })} fullWidth />
          <TextField label="Hours" value={manualCourse.hours} onChange={(e) => setManualCourse({ ...manualCourse, hours: e.target.value })} fullWidth />
          <Button onClick={handleManualAddition} variant="contained" color="primary" style={{ marginTop: 10 }}>POST</Button>
          {status && <p style={{ color: 'green', marginTop: 10 }}>Uploaded Successfully</p>}
        </div>
        <Divider sx={{ backgroundColor: "#AED2FF" }} />
        <div style={{ marginTop: 20 }}>
          <FormLabel>Upload Courses via CSV:</FormLabel>
          <input type="file" name='file' onChange={handleFileChange} accept=".csv" /> {/* Ensure accept=".csv" */}
          <Button onClick={handleUpload} variant="contained" color="primary" style={{ marginTop: 10 }}>Upload</Button>
          {status && <p style={{ color: 'green', marginTop: 10 }}>Uploaded Successfully</p>}
        </div>
      </Paper>
    </div>
  );
}
