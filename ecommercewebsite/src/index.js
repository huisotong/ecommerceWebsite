import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './Home/HomePage';
import CheckOut from './Home/CheckOut';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component, useState, useEffect, useLayoutEffect } from 'react';


import { BrowserRouter as Router, Routes, Route, Link, Navigate, Outlet, } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/CheckOut" element={<CheckOut />} />
        </Routes>
    </Router>
);

reportWebVitals();
