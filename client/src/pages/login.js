import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/login', { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then((result) => {
        console.log(result);
        if (result.data === 'Success') {
          navigate('/Landing');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.loginWrapper}>
      <div className="card">
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className={`form-label ${styles.formLabel}`}>Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            name="email"
            required
            className={`form-control ${styles.formControl}`}
            onChange={(e) => setEmail(e.target.value)}
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

          <button type="submit" className={`btn btn-primary ${styles.submitButton}`}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
