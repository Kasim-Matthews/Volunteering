import Navbar from './components/navbar'
import Search from './components/search'
import Footer from './components/footer-search'
declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

export default class SVolunteer extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Search />
                <Footer />
                
            </div>
        );
    }

}