import React, { useState } from 'react';
import './register.css';
import img from './img.png';
import { auth, db } from '../../pages/firebaseConfig';  // Import Firebase authentication and Firestore instance
import axios from 'axios';
// import FirebaseConfig from '../firebaseConfig';

function Registernow() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [inputClasses, setInputClasses] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleInputFocus = (name) => {
    setInputClasses((prevClasses) => ({
      ...prevClasses,
      [name]: 'input--filled',
    }));
  };

  const handleInputBlur = (name) => {
    const { value } = inputs;
    setInputClasses((prevClasses) => ({
      ...prevClasses,
      [name]: value.trim() === '' ? '' : 'input--filled',
    }));
  };

  const handleInputValidation = (e) => {
    const { name, validity } = e.target;
    setInputClasses((prevClasses) => ({
      ...prevClasses,
      [name]: validity.valid ? 'input--filled' : 'inputs--invalid',
    }));
  };

  const signupUser = async (email, password) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      // User signed up successfully
      // You can perform additional actions here if needed
    } catch (error) {
      // Handle signup error
      console.error('Signup Error:', error);
    }
  };

  const postDataAxios = async (data) => {
    try {
      const response = await axios.post('your_api_endpoint', data);
      // Handle successful post request
    } catch (error) {
      // Handle post error
      console.error('Post Data Error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = inputs;

    // Call signupUser with Firebase
    await signupUser(email, password);

    // Call postDataAxios with Axios
    await postDataAxios({ username, email });

    // Reset input fields
    setInputs({
      username: '',
      email: '',
      password: '',
    });

    setInputClasses({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <main>
      <img src={img} alt="map" />
      {/* Add your HTML content here */}
      
      <form onSubmit={handleSubmit}>
        <span>
          <label htmlFor="username" className="text-small-uppercase">
            Username
          </label>
          <input
            className={`text-body ${inputClasses.username}`}
            id="username"
            name="username"
            type="text"
            required
            value={inputs.username}
            onChange={handleInputChange}
            onFocus={() => handleInputFocus('username')}
            onBlur={() => handleInputBlur('username')}
            onInput={handleInputValidation}
          />
        </span>
        <span>
          <label htmlFor="email" className="text-small-uppercase">
            Email
          </label>
          <input
            className={`text-body ${inputClasses.email}`}
            id="email"
            name="email"
            type="email"
            required
            value={inputs.email}
            onChange={handleInputChange}
            onFocus={() => handleInputFocus('email')}
            onBlur={() => handleInputBlur('email')}
            onInput={handleInputValidation}
          />
        </span>
        <span>
          <label htmlFor="password" className="text-small-uppercase">
            Password
          </label>
          <input
            className={`text-body ${inputClasses.password}`}
            id="password"
            name="password"
            type="password"
            required
            value={inputs.password}
            onChange={handleInputChange}
            onFocus={() => handleInputFocus('password')}
            onBlur={() => handleInputBlur('password')}
            onInput={handleInputValidation}
          />
        </span>
        <input
          className="text-small-uppercase"
          id="submit"
          type="submit"
          value="Subscribe now"
        />
      </form>
    </main>
  );
}

export default Registernow;
