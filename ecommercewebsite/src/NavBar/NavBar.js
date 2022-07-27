// JavaScript source code
// JavaScript source code
import { Route, Link } from 'react-router-dom';
import { Component } from 'react';
import { React, useState, useEffect } from "react";


//import zIndex from '@mui/material/styles/zIndex';
// <button>About Us</button> 
//                <a href="/AboutUs">About Us</a><a href="/ContactUs">Contact Us</a>

const NavBar = () => {


    return (
        <div style={{ height: '40%', width: 'auto',backgroundColor: '#FFD700'}}>
        
                <h1 style={{ margin:"0px" }}>Shopy!</h1>
            <div >
                <a href="/Home">Home</a>
                <a href="/Opportunities">Opportunities</a>
                <a href="/Favourites">Favourites</a>
                <a href="/Status">Status</a>
                <a href="/AddReview">Add Review</a>
                <a href="/Profile">Profile</a>
                <a href="/ViewCompanyProfile">Company Profile</a>
                


            </div>

            
            </div>

    )
}


const brandName = {
    color: "white",

}
//position: "fixed",
//    width: "100%",
//       top: 0,
//           margin: "0  0 30px",
const test = {

    backgroundColor: '#FFD700',

}

//position: "fixed"
//,
//  position: "sticky",
//top: 0,
//zIndex: 9999
export default NavBar