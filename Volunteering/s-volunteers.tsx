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
            </div>
        );
    }

}