
import './App.css';
import HomePage from './Home/HomePage';
import React from 'react';
import { Component, useState, useEffect, useLayoutEffect } from 'react';

import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Routes, Route, Link, Navigate, Outlet, } from 'react-router-dom';



export default function App() {
    
    return (
        <div className="App">

            <h2>sd</h2>
            
            <a href="/Home">home</a>
        </div>
    );


}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Router>
        <App/>
    </Router>,
    root
);
//<h2>Picure of logo with "login" button</h2>