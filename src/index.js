
import './style.css';
import './script.js';
import ReactDOM from 'react-dom'; // installed using npm
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import React from 'react';



import App from './App';
import LoginForm from './login_signup/LoginForm';
import SignUpForm from './login_signup/SignUpForm';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="login" element={<LoginForm />}/>
            <Route path='signup' element={<SignUpForm />} />
        </Routes>
    </BrowserRouter>

, document.getElementById("react-container"));
