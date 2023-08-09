import Navbar from './components/navbar'
import Footer from './components/footer'
declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

export default class SVolunteer extends React.components{
    render() {
        return (
            <div>
                <Navbar />
                <div className="search--container">
                    <div className="row">
                        <div className="col">
                            <h2 className="form--title">Search Volunteer</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}