import React from 'react';
import Container from '@mui/material/Container';
import { minBoxHeightPx } from 'support/support';

const HomePage = () => (
  <Container
    sx={{
      bgcolor: '#cfe8fc',
      marginLeft: '0',
      marginRight: '0',
      paddingTop: '10px',
      minHeight: minBoxHeightPx,
      textAlign: 'center',
    }}
  ></Container>
);

export default HomePage;
