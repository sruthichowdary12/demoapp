import React, { useState, useRef } from 'react';
import axios from 'axios';

export default function UploadMaterial() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    file: null
  });

  const fileInputRef = useRef(null); // Ref for the file input element

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('file', formData.file); // Append the file object

      const response = await axios.post('http://localhost:2014/uploadmaterial', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set content type for FormData
        }
      });

      if (response.status === 200) {
        setFormData({
          title: '',
          description: '',
          file: null
        });
        fileInputRef.current.value = '';
      }
      setMessage(response.data);
      setError('');
    } 
    catch (error) 
    {
      setError(error.response.data);
      setMessage('');
    }
  };

  return (
    <div style={{ width: '50%', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h3 align="center"><u>Upload Material</u></h3>
      {message ? <h4 align="center" style={{ color: 'green' }}>{message}</h4> : null}
      {error ? <h4 align="center" style={{ color: 'red' }}>{error}</h4> : null}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label style={{ marginBottom: '5px' }}>Title</label>
          <input type="text" id="title" value={formData.title} onChange={handleChange} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }} required />
        </div>
        <div>
          <label style={{ marginBottom: '5px' }}>Description</label>
          <textarea id="description" value={formData.description} onChange={handleChange} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }} required />
        </div>
        <div>
          <label style={{ marginBottom: '5px' }}>CO</label>
          <select id="co" value={formData.co} onChange={handleChange} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }} required>
            <option value="">Select CO</option>
            <option value="CO 1">CO 1</option>
            <option value="CO 2">CO 2</option>
            <option value="CO 3">CO 3</option>
            <option value="CO 4">CO 4</option>
          </select>
        </div>
        <div>
          <label style={{ marginBottom: '5px' }}>Upload Image</label>
          <input type="file" id="file" ref={fileInputRef} onChange={handleFileChange} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }} required />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add</button>
      </form>
    </div>
  );
}