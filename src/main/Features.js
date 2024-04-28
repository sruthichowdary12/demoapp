import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Container, Typography } from '@mui/material';
import styled from 'styled-components';
import Logo from "../assets/logo.jpeg";

// Import images for LMS features
import CourseManagementImage from '../assets/course-management.jpeg';
import UserManagementImage from '../assets/user-management.jpeg';
import AssessmentToolsImage from '../assets/assessment-tools.jpeg';

const Features = () => {
    return (
        <PageWrapper>
            <NavBar />
            <StyledContainer>
                <CenteredTypography variant="h2" component="h2" gutterBottom>
                    Features
                </CenteredTypography>
                <Feature
                    title="Course Management"
                    description="Manage courses effectively with our intuitive course management system."
                    image={CourseManagementImage}
                />
                <Feature
                    title="User Management"
                    description="Easily handle user accounts, permissions, and roles with our user management tools."
                    image={UserManagementImage}
                />
                <Feature
                    title="Assessment Tools"
                    description="Create and administer assessments seamlessly using our built-in assessment tools."
                    image={AssessmentToolsImage}
                />
            </StyledContainer>
            <Footer>
                &copy; 2024 Wisdom Wave. All Rights Reserved.
            </Footer>
        </PageWrapper>
    );
};

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const NavBar = () => {
    const location = useLocation();
    return (
        <StyledAppBar position="static">
            <Toolbar>
                <Typography variant="h6" component={Link} to="/" style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                    Wisdom Wave
                    <img src={Logo} alt="Logo" style={{ marginLeft: '10px', height: '30px' }} /> {/* Add your logo here */}
                </Typography>
                <NavLinks>
                    <NavLink to="/about" active={location.pathname === '/about' ? 1 : 0}>About</NavLink>
                    <NavLink to="/features" active={location.pathname === '/features' ? 1 : 0}>Features</NavLink>
                    <NavLink to="/contact" active={location.pathname === '/contact' ? 1 : 0}>Contact</NavLink>
                </NavLinks>
            </Toolbar>
        </StyledAppBar>
    );
};

const StyledContainer = styled(Container)`
    margin-top: 50px; /* Adjust according to header height */
    padding: 20px;
    flex: 1; /* Allow container to grow and fill remaining space */
`;

const Footer = styled.footer`
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
`;

const StyledAppBar = styled(AppBar)`
    background-color: #3f51b5; /* Change the background color */
`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
`;

const NavLink = styled(Link)`
    color: ${({ active }) => (active ? '#000000' : '#ffffff')}; /* Change the color based on active state */
    text-decoration: none;
    margin-right: 20px;

    &:hover {
        text-decoration: ${({ active }) => (active ? 'none' : 'underline')};
    }
`;

const CenteredTypography = styled(Typography)`
    text-align: center;
`;

const FeatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`;

const FeatureTitle = styled.h3`
    margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
    text-align: center;
    margin-bottom: 20px;
`;

const FeatureImage = styled.img`
    width: 100%;
    max-width: 600px;
    border-radius: 8px;
`;

const Feature = ({ title, description, image }) => {
    return (
        <FeatureContainer>
            <FeatureTitle>{title}</FeatureTitle>
            <FeatureDescription>{description}</FeatureDescription>
            <FeatureImage src={image} alt={title} />
        </FeatureContainer>
    );
};

export default Features;
