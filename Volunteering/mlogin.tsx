import Navbar from './components/navbar'
import Mform from './components/mform'

var React = require('react');
var ReactDOM = require('react-dom');

export default class Mlogin extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Mform />
            </div>
        );
    }
}