import React, { useState } from 'react';
import { Box, Grid, Typography, TextField, Button, Container, Paper, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/signin', { email, password })
      .then(response => {
        console.log(response.data);
        // handle success (e.g., save token, redirect)
        if (response.data.token) {
          localStorage.setItem('token', response.data.token); // Store token in localStorage
          navigate('/home'); // Redirect to home page
          alert("login successful")
        }
      })
      .catch(error => {
        console.error(error);
        alert("invalid Credentials")
        // handle error (e.g., display error message)
      });
  };

  return (
    <Container maxWidth="lg" className="container">
      <Grid container spacing={2}>
        <Grid item xs={12} md={7} className="left-container">
          <Typography variant="h2" component="h1">
            FinPoint
          </Typography>
          <Typography variant="body1" mt={2}>
            We manage all the financial aids and give tips about savings for future.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper elevation={3} className="right-container">
            <Typography variant="h4" component="h2" gutterBottom>
              Login
            </Typography>
            <Box component="form" noValidate className="form" onSubmit={handleLogin}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" fullWidth variant="contained" className="MuiButton-root">
                Sign In
              </Button>
            </Box>
            <Box mt={2} textAlign="center">
              <Typography variant="body2">
                New to FinPoint? <Link onClick={handleSignUpClick} className="signup-link">Register here</Link>
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Welcome;
