import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Footer = () => {
  const footerHeight = '100px'; // Adjust this value based on the actual height of your footer

  return (
    <AppBar color="primary" sx={{ backgroundColor: 'black', position: 'relative', top: 'auto', bottom: 0 }}>
      <Container>
        <Toolbar sx={{ flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6" color="inherit" sx={{ marginBottom: 1, color: 'white' }}>
            Clinic Connect
          </Typography>

          <Typography variant="body2" color="inherit" sx={{ color: 'white' }}>
            &copy; 2023 Clinic Connect. All Rights Reserved.
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
