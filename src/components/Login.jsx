import { useState } from 'react';
import './login.css';

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!user.email || !user.password) {
      setError('Both fields are required');
      return false;
    }
    // setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert('Form submitted successfully:', user);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Log In</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={user.email} 
              onChange={handleChange} 
              placeholder="Enter your email" 
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password"
              value={user.password} 
              onChange={handleChange} 
              placeholder="Enter your password" 
            />
          </div>
          <button type="submit" className="login-btn">Log In</button>
        </form>
        <p className="signup-link">Dont have an account? <a href="">Sign Up</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
