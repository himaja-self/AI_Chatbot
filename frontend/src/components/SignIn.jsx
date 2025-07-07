import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './SignIn.css';

function SignIn() {
  const navigate = useNavigate(); // Initialize navigate hook
  
  // Form state
  const [formData, setFormData] = useState({
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
    return;
  }

  try {
    // Directly handle success logic without artificial delay
    console.log('Login successful:', formData);

    setFormData({ email: '', password: '' });
    setIsSubmitted(false);

    navigate('/chatbot');
  } catch (error) {
    console.error('Login error:', error);
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
          <h1 className="signin-title">Welcome Back</h1>
          <p className="signin-subtitle">Sign in to your account</p>
        </div>

        <div className="signin-form">
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
            disabled={isSubmitted}
          >
            <span>{isSubmitted ? 'Signing In...' : 'Sign In'}</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="signin-footer">
          <p>Don't have an account? 
            <Link to="/register">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;