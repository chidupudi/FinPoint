import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    newEmail: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.log('No token found, redirecting to signin');
        navigate('/signin');
        return;
      }
      try {
        console.log('Fetching profile with token:', token);
        const res = await axios.get('/api/profile', {
          headers: {
            Authorization: token,
          },
        });
        console.log('Profile fetched successfully:', res.data);
        setUser(res.data);
        setFormData({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          mobileNumber: res.data.mobileNumber,
          newEmail: res.data.newEmail,
        });
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEdit = () => setEditMode(true);

  const handleCancel = () => {
    setEditMode(false);
    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      mobileNumber: user.mobileNumber,
      newEmail: user.newEmail,
    });
  };

  const handleSave = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.put('/api/profile', formData, {
        headers: {
          Authorization: token,
        },
      });
      console.log('Profile updated successfully:', res.data);
      setUser(res.data);
      setEditMode(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete('/api/profile', {
        headers: {
          Authorization: token,
        },
      });
      localStorage.removeItem('token');
      navigate('/signin');
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {editMode ? (
        <>
          <div className="profile-field">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="profile-field">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="profile-field">
            <label>Mobile Number:</label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="profile-field">
            <label>Email:</label>
            <input
              type="email"
              name="newEmail"
              value={formData.newEmail}
              onChange={handleInputChange}
            />
          </div>
          <div className="profile-buttons">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <div className="profile-field">
            <label>First Name:</label>
            <span>{user.firstName}</span>
          </div>
          <div className="profile-field">
            <label>Last Name:</label>
            <span>{user.lastName}</span>
          </div>
          <div className="profile-field">
            <label>Mobile Number:</label>
            <span>{user.mobileNumber}</span>
          </div>
          <div className="profile-field">
            <label>Email:</label>
            <span>{user.newEmail}</span>
          </div>
          <div className="profile-buttons">
            <button onClick={handleEdit}>Edit Profile</button>
            <button onClick={handleDelete}>Delete Profile</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
