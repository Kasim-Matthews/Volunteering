import Navbar from './components/navbar'
import Footer from './components/footer'
var React = require('react');
var ReactDOM = require('react-dom');

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <container>
                    <img className="hero" src="./images/volunteer1.jpg" />
                    <div className="hero--text">An <span>EASY</span> Volunteer Management System</div>
                </container>
                <Footer />
            </div>
        );
    }
}
