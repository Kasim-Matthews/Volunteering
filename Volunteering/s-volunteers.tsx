import Navbar from './components/navbar'
import Footer from './components/footer'
import Search from './components/search'
declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

export default class SVolunteer extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Search />
                <footer className="regular-footer-search">
                    <div className="footer--inner">
                        <div className="third">
                            <h3>Get Started</h3>
                            <p>Search Volunteers</p>
                            <p>Manage Oppurtunities</p>
                            <p>Register Organization</p>
                            <p>Volunteer Login</p>
                            <p>Manager Login</p>
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
            </div>
        );
    }

}