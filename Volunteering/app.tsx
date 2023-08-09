import Home from './home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './login'
import Mlogin from './mlogin'
var React = require('react');
var ReactDOM = require('react-dom');

export class Hello extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/vlogin" element={<Login />} />
                    <Route path="/mlogin" element={<Mlogin />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));

