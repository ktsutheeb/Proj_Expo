import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Signup.module.css'; // Import CSS module

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/register', { name, email, country, phone, password })
      .then((result) => {
        console.log(result);
        navigate('/Login');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.centerContainer}> {/* Apply centering class */}
      <div className={styles.card}> {/* Apply card styles */}
        <h2 className={styles.title}>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className={`form-label ${styles.formLabel}`}>Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
            required
            className={`form-control ${styles.formControl}`}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email" className={`form-label ${styles.formLabel}`}>Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            name="email"
            required
            className={`form-control ${styles.formControl}`}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="country" className={`form-label ${styles.formLabel}`}>Country</label>
          <input
            type="text"
            id="country"
            placeholder="Enter your country"
            name="country"
            required
            className={`form-control ${styles.formControl}`}
            onChange={(e) => setCountry(e.target.value)}
          />

          <label htmlFor="phone" className={`form-label ${styles.formLabel}`}>Phone</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            name="phone"
            required
            className={`form-control ${styles.formControl}`}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label htmlFor="password" className={`form-label ${styles.formLabel}`}>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            name="password"
            required
            className={`form-control ${styles.formControl}`}
            onChange={(e) => setPassword(e.target.value)}
          />

          

          <button type="submit" className={`btn ${styles.submitButton}`}>Create Account</button>
        </form>

        <div className={styles.textCenter}>
          <p className="mb-1" style={{ fontSize: '1.3rem' }}>Already have an account?</p>
          <Link to="/Login" className={styles.link}>Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
