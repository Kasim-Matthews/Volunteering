import { Link, useNavigate } from 'react-router-dom'
declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

export default function Footer() {
    const navigate = useNavigate();

    return (
        <footer className="regular-footer">
            <div className="footer--inner">
                <div className="third">
                    <h3>Get Started</h3>
                    <p onClick={() => navigate('/search')}>Search Volunteers</p>
                    <p>Manage Oppurtunities</p>
                    <p>Register Organization</p>
                    <p onClick={() => navigate('/vlogin')}>Volunteer Login</p>
                    <p onClick={() => navigate('/mlogin')}>Manager Login</p>
                </div>
                <div className="third2">
                    <h3>Product</h3>
                    <p>Who uses Voyage Volunteering?</p>
                    <p>Why use Voyage Volunteering?</p>
                    <p>How it Works</p>
                    <p>Success Stories</p>
                    <p>Company Promise</p>
                </div>
                <div className="third3">
                    <h3>Copmany</h3>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Frequently Asked Questions</p>
                    <p>Terms of service</p>
                    <p>Privacy Policy</p>
                </div>

            </div>
            <p className="copyright">&copy;voyagevolunteering.com. All Rights Reserved</p>
        </footer>
    );
}