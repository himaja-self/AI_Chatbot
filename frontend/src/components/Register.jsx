import React, { useState } from 'react';
import './SignIn.css'; // Reusing the same CSS file

function Register() {
  // Form state
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  
  // Form submission states
  const [isSubmitted, setIsSubmitted] = useState(false);
  

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Validate form
  const validateForm = () => {
    let isValid = true;
    
    // Username validation
    if (!formData.username) {
      isValid = false;
    } else if (formData.username.length < 3) {
      isValid = false;
    }
    
    // Email validation
    if (!formData.email) {
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
    }
    
    // Password validation
    if (!formData.password) {
      isValid = false;
    } else if (formData.password.length < 6) {
      isValid = false;
    }
    
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    if (!validateForm()) {
      console.log('Form validation failed');
      setIsSubmitted(false);
      return;
    }
    
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Handle successful registration here
      console.log('Registration successful:', formData);
      
      // Reset form
      setFormData({ username: '', email: '', password: '' });
      setIsSubmitted(false);
      
    } catch (error) {
      console.error('Registration error:', error);
      setIsSubmitted(false);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="signin-card">
        <div className="signin-header">
          <div className="logo-container">
            <div className="logo">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <h1 className="signin-title">Create Account</h1>
          <p className="signin-subtitle">Sign up to get started</p>
        </div>

        <div className="signin-form">
          <div className="form-group">
            <label className={`form-label ${formData.username ? 'focused' : ''}`}>
              Username
            </label>
            <div className="input-container">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Enter your username"
                className="form-input"
              />
              <div className="input-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className={`form-label ${formData.email ? 'focused' : ''}`}>
              Email Address
            </label>
            <div className="input-container">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="form-input"
              />
              <div className="input-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="form-group">
            <label className={`form-label ${formData.password ? 'focused' : ''}`}>
              Password
            </label>
            <div className="input-container">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="form-input"
              />
              <div className="input-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="16" r="1" fill="currentColor"/>
                  <path d="M7 11V7A5 5 0 0 1 17 7V11" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </div>
          
          <button
            type="submit"
            className="signin-button"
            onClick={handleSubmit}
          >
            <span>Create Account</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default Register;