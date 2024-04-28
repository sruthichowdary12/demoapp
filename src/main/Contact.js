import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Container, Typography } from '@mui/material';
import styled from 'styled-components';
import Logo from "../assets/logo.jpeg";

const Contact = () => {
    return (
        <>
            <NavBar />
            <StyledContainer>
                <Typography variant="h2" component="h2" gutterBottom>
                    Contact Us
                </Typography>
                <Typography variant="body1" gutterBottom>
                    If you have any questions or inquiries, please feel free to contact us using the information provided below.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Email: contact@wisdomwave.com
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Phone: +1 123-456-7890
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Address: 123 Main Street, Vijayawada, India
                </Typography>
            </StyledContainer>
            <Footer>
                &copy; 2024 Wisdom Wave. All Rights Reserved.
            </Footer>
        </>
    );
};

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
    min-height: calc(100vh - 50px); /* Adjust according to header height */
    padding: 20px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    margin-right: 20px;
`;

const Footer = styled.footer`
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
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

export default Contact;
