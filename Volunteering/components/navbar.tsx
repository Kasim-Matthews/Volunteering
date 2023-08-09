import {Link, useNavigate } from 'react-router-dom'
declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');


export default function Navbar() {
    const navigate = useNavigate();

    return (
        <header>
            <container className="header--container">
                <img className="header--logo" src="./images/Group 5.png" />
                <ul className="header--nav">
                    <div className="dropdown">
                        <li className="dropbtn">Get Started <b className="caret"></b></li>
                        <div className="dropdown-content">
                            <a href="#">Search Volunteers</a>
                            <a href="#">Manage Opputunities</a>
                            <a href="#">Register organization</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <li className="dropbtn">FAQs<b className="caret"></b></li>
                        <div className="dropdown-content">
                            <a href="#">Privacy Concerns</a>
                            <a href="#">Why Us?</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <li className="dropbtn">Log In<b className="caret"></b></li>
                        <div id="myDropdown" className="dropdown-content">
                            <a onClick={() => navigate('/mlogin')}>Manager Login</a>
                            <a onClick={() => navigate('/vlogin')}>Volunteer Login</a>
                        </div>
                    </div>
                    <li>About Us</li>
                    <li>Contact Us</li>

                </ul>
            </container>
        </header>

    );
}