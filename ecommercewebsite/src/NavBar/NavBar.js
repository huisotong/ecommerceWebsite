// JavaScript source code
// JavaScript source code
import { Route, Link } from 'react-router-dom';
import { Component } from 'react';
import { React, useState, useEffect } from "react";
import './NavBarStyle.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const NavBar = () => {


    return (
        <div class='navbar' >
            <div style={{ width: '50%' ,height:'100%'}}>
                <h1 style={{ margin: "0px", fontFamily: 'Concert One', paddingLeft: '8%', paddingTop:'2%'}}>ezShopy! ONE STOCK EACH!!</h1></div>
            <div style={{ width: '50%' ,height:'100%'}} >
                
                <Form className="d-flex" style={{ paddingTop: '2.3%',paddingLeft:'10%', width:'60%' }}>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-light">Search</Button>
                </Form>


            </div>

            
            </div>

    )
}

export default NavBar