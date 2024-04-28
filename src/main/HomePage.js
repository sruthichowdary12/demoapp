import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Container, Grid, Button, Typography } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.gif";
import { LightPurpleButton } from '../components/buttonStyles';
import Logo from "../assets/logo.jpeg";

const Homepage = () => {
    return (
        <>
            <NavBar />
            <StyledContainer>
                <Grid container spacing={0}>
                    {/* Image on the left side */}
                    <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={Students} alt="students" style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                    </Grid>
                    {/* Text on the right side */}
                    <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <StyledPaper elevation={3}>
                            <StyledTitle>
                                Welcome to
                                <br />
                                WISDOM WAVE
                                <br />
                            </StyledTitle>
                            <StyledText>
                                <b>Riding The Wave Of Wisdom</b>
                            </StyledText>
                            <StyledLink to="/choose">
                                <LightPurpleButton variant="contained" fullWidth>
                                    Login
                                </LightPurpleButton>
                            </StyledLink>
                        </StyledPaper>
                    </Grid>
                </Grid>
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
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 50px);
`;

const StyledPaper = styled.div`
    padding: 24px;
    background-color: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled.h1`
    font-size: 3rem;
    color: #252525;
    font-weight: bold;
    padding-top: 0;
    letter-spacing: normal;
    line-height: normal;
`;

const StyledText = styled.p`
    color: #666666;
    margin-top: 20px;
    margin-bottom: 20px;
    letter-spacing: normal;
    line-height: normal;
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

export default Homepage;
