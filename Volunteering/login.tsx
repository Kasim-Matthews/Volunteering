import Navbar from './components/navbar'
import Form from './components/vform'

var React = require('react');
var ReactDOM = require('react-dom');

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Form />
            </div>
        );
    }
}