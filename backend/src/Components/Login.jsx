import React, { useState } from 'react';
import './Login.css';
import illustration from '../Photo/image.png'; // Update the path based on where you store the image

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        if (!validateEmail(email)) {
            setEmailError('Invalid email format');
            valid = false;
        } else {
            setEmailError('');
        }

        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            alert('Login successful');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && <span className="error">{emailError}</span>}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter 6 characters or more"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {passwordError && <span className="error">{passwordError}</span>}
                    </div>
                    <div className="form-group">
                        <button type="submit" className="login-button">Login</button>
                    </div>
                    <div className="alternate-login">
                        <p>or login with</p>
                        <button type="button" className="google-button">Google</button>
                        <button type="button" className="facebook-button">Facebook</button>
                    </div>
                    <p className="signup-link">
                        Don't have an account yet? <a href="/signup">Sign Up</a>
                    </p>
                </form>
            </div>
            <div className="illustration-container">
                <img src={illustration} alt="Illustration" />
            </div>
        </div>
    );
};

export default Login;
