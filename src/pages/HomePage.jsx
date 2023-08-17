import React from 'react';
import Container from '@mui/material/Container';
import { minBoxHeightPx } from 'support/support';
import backgroundImage from 'support/PhoneBookHome.jpeg';
import { Typography } from '@material-ui/core';
import { StyledNavLink } from 'components/TopBar/TopBar.styled';

const HomePage = () => (
  <Container
    sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      bgcolor: '#cfe8fc',
      marginLeft: '0',
      marginRight: '0',
      paddingTop: '10px',
      minHeight: minBoxHeightPx,
      textAlign: 'center',
    }}
  >
    <Typography variant="h4" gutterBottom>
      <StyledNavLink to="/login" sx={{ fontSize: '24px' }}>
        LogIn
      </StyledNavLink>{' '}
      to access your contacts.
    </Typography>
  </Container>
);

export default HomePage;
