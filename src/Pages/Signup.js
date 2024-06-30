// src/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button, Container, Paper } from '@mui/material';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    newEmail: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/signup', formData)
      .then(response => {
        console.log(response.data);
        alert("User created successfully");
        navigate('/'); // Redirect to home page
      })
      .catch(error => {
        console.error(error);
        alert("Please enter correct details");
      });
  };

  return (
    <Container maxWidth="sm" className="signup-container">
      <Paper elevation={3} className="signup-paper">
        <Typography variant="h4" component="h2" gutterBottom>
          Sign Up
        </Typography>
        <Box component="form" noValidate className="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="given-name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="mobileNumber"
            label="Mobile Number"
            name="mobileNumber"
            autoComplete="tel"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="newEmail"
            label="Email Address"
            name="newEmail"
            autoComplete="email"
            value={formData.newEmail}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="newPassword"
            label="Password"
            type="password"
            id="newPassword"
            autoComplete="new-password"
            value={formData.newPassword}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Button type="submit" fullWidth variant="contained" className="MuiButton-root">
            Sign Up
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Signup;
