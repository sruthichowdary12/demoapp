import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Container, Typography } from '@mui/material';
import styled from 'styled-components';
import Sruthi from '../assets/sruthi.jpg';
import Kavya from '../assets/kavya.jpg';
import Saila from '../assets/saila.jpg';
import Logo from "../assets/logo.jpeg";

const About = () => {
    return (
        <>
            <NavBar />
            <StyledContainer>
                <Typography variant="h2" component="h2" gutterBottom>
                    About Us
                </Typography>
                <Typography variant="body1" gutterBottom>
                    We are a passionate team dedicated to revolutionizing education through technology. Our journey began with a simple idea - to create a learning management system that empowers educators and learners alike. With a focus on user experience and innovation, we strive to provide an intuitive platform for online education.
                </Typography>
                <TeamContainer>
                    <TeamMember>
                        <StyledImage src={Sruthi} alt="Team Member 1" />
                        <Typography variant="subtitle1" gutterBottom>
                                Sruthi Chowdary
                        </Typography>
                        
                    </TeamMember>
                    <TeamMember>
                        <StyledImage src={Kavya} alt="Team Member 2" />
                        <Typography variant="subtitle1" gutterBottom>
                            Kavya Sree
                        </Typography>
                        
                    </TeamMember>
                    <TeamMember>
                        <StyledImage src={Saila} alt="Team Member 3" />
                        <Typography variant="subtitle1" gutterBottom>
                            Lakshmi Sailaja
                        </Typography>
                        
                    </TeamMember>
                </TeamContainer>
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
    margin-top: 50px;
    min-height: calc(100vh - 50px);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`;

const TeamContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
`;

const TeamMember = styled.div`
    text-align: center;
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

const StyledImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 10px;
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

export default About;
