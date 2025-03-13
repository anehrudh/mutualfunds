import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        // Handle registration logic here
        alert('Register button clicked!');
    };

    return (
        <div className='container'>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <br />
                <label>
                    Phone Number:
                    <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <br />
                <label>
                    Age:
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
                </label>
                <br />
                <label>
                    Gender:
                    <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <br />
                <button type="submit">Register</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>
    );
};

export default Register;