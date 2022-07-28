import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './Home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component, useState, useEffect, useLayoutEffect } from 'react';


import { BrowserRouter as Router, Routes, Route, Link, Navigate, Outlet, } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//<Routes>
//    <Route path='/' element={<App />} />

//    <Route path='/Home' element={<HomePage />} />

//</Routes
//root.render(
//    <React.StrictMode>
//        <Routes>
//            <App />
//        </Routes>
//    </React.StrictMode>
//);
