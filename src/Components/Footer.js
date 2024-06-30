import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Footer() {
  return (
    <Box
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="body1" color="text.secondary" align="center">
          © 2024 FinPoint
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
          <Link href="#privacy" color="inherit" sx={{ mx: 1 }}>
            Privacy Policy
          </Link>
          <Link href="#terms" color="inherit" sx={{ mx: 1 }}>
            Terms of Service
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;