import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Paper,
  Box,
  Container,
  CircularProgress,
  Backdrop,
} from '@mui/material';
import styled from 'styled-components';
import Student from "../assets/student.gif";
import Teacher from "../assets/teacher.gif";
import Admin from "../assets/admin.gif";

const ChooseUser = ({ visitor }) => {
  const navigate = useNavigate();

  const [loader] = useState(false);

  const navigateHandler = (user) => {
    if (user === "Admin") {
      navigate('/admin/AdminLogin');
    } else if (user === "Student") {
      navigate('/student/StudentLogin');
    } else if (user === "Faculty") {
      navigate('/faculty/FacultyLogin');
    }
  }

  return (
    <StyledContainer>
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <div onClick={() => navigateHandler("Admin")}>
              <StyledPaper elevation={3}>
                <Box mb={2}>
                <img src={Admin} alt="admin" style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }}/>
                </Box>
                <StyledTypography>
                  Admin
                </StyledTypography>
                Login as an administrator to access the dashboard to manage app data.
              </StyledPaper>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper elevation={3}>
              <div onClick={() => navigateHandler("Student")}>
                <Box mb={2}>
                  <img src={Student} alt="Student" style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }}/>
                </Box>
                <StyledTypography>
                  Student
                </StyledTypography>
                Login as a student to explore course materials and assignments.
              </div>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper elevation={3}>
              <div onClick={() => navigateHandler("Faculty")}>
                <Box mb={2}>
                <img src={Teacher} alt="Faculty" style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }}/>
                </Box>
                <StyledTypography>
                  Teacher
                </StyledTypography>
                Login as a teacher to create courses, assignments, and track student progress.
              </div>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="inherit" />
        Please Wait
      </Backdrop>
    </StyledContainer>
  );
};

export default ChooseUser;

const StyledContainer = styled.div`
  background: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  text-align: center;
  background-color: black;
  color: white;
  cursor: pointer;
  

  &:hover {
    background-color: #f0f0f0;
  }
`;

const StyledTypography = styled.h2`
  margin-bottom: 10px;
`;
