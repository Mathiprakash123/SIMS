import React, { useState } from 'react';
import './login.css';
import { FaUserGraduate } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const move = useNavigate();

  const Signin = () => {
    let user = document.getElementById("name").value;
    let pass = document.getElementById("pass1").value;

    if (user !== "vikram" || pass !== "vikky") {
      alert("Username/Password invalid");
    } else {
      move("/Home");
    }
  };

  const show = () => {
    move("/signup");
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [generatedCaptcha, setGeneratedCaptcha] = useState(generateRandomCaptcha());
  const [isChecked, setIsChecked] = useState(false);

  function generateRandomCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const captchaLength = 6;
    let captcha = '';
    for (let i = 0; i < captchaLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captcha += characters[randomIndex];
    }
    return captcha;
  }

  const handleCaptchaChange = (event) => {
    setCaptcha(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleLogin = () => {
    if (captcha.toLowerCase() === generatedCaptcha.toLowerCase()) {
      console.log('Login successful');
    } else {
      console.log('Captcha validation failed. Please enter the correct code.');
    }
  };

  const regenerateCaptcha = () => {
    setGeneratedCaptcha(generateRandomCaptcha());
    setCaptcha('');
  };

  return (
    <div className='login'>
      <div className="login-container">
        
        <form action="" className="login-form">
          <h1 className="login-header">Student Login Page</h1>
          <input
            type="text"
            value={username}
            className='login-username'
            id='name'
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
          />
          <FaUserGraduate className="user-logo" />
          <input
            type="password"
            value={password}
            className='login-password'
            id='pass1'
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
          <RiLockPasswordFill className="user-logo" />

          <div className="checkbox">
            <input
              type="checkbox"
              className="login-checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            Keep me signed in
          </div>
          <br /><br />
          <span className="captcha-code">{generatedCaptcha}</span>
          <br /><br />
          
          <div className="captcha-container">
            <input
              type="text"
              value={captcha}
              className='captcha'
              onChange={handleCaptchaChange}
              placeholder="Enter the code above"
            />
           
            <button type="button" className="refresh-captcha" onClick={regenerateCaptcha}>
              Refresh
            </button>
          </div>

          <Link to={'/'} >
            <button className="login-button" onClick={handleLogin}>Login</button>
          </Link>
          <Link to={'/forgetpassword'} className="login-sign">
            <h3 className="login-signup-text">Forget Password?</h3>
          </Link>
          
          <div className="logo-container">
            <a href="www.google.com" className="login-logo-1">
              <FaGoogle className="login-logo-1" />
            </a>
            <a href="www.google.com" className="login-logo-2">
              <FaFacebook className="login-logo-2" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
