import { Component } from "react";
// import { Router, Route, Link } from 'react-router';
import '../components/Navbar.scss';

function Navbar(){
    return(
        <div className="Navbar">
            <nav>
                <ul class="nav-links">
                    <li><a href="#">  Home </a></li>
                    <li><a href="#" > Projects </a></li>
                    <li><a href="#" > Write Ups </a></li>
                    <li><a href="#" > Contact </a></li>
                </ul> 
            </nav>
        </div>
    );
}

export default Navbar;