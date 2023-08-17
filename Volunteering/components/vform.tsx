import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

export default function Form() {

    const database = [
        {
            username: "user1",
            password: "pass1"
        }
    ];

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();


        var userData = database.find((user) => user.username === username)

        if (userData) {
            if (userData.password !== password) {
                alert("Password invalid");
            }
            else {
                navigate('/search');
            }
        }
        else {
            alert("Username invalid");
        }

    }

    return (
        <div>
            <section className="form--container">
                <div className="row">
                    <div className="col">
                        <h2 className="form--title">Volunteer Login</h2>
                    </div>
                </div>
                <div className="row--spacer">
                    <div className="col">
                        <div className="user--reminder">This login page assumes you are already a registered volunteer for an organization. If you need to register, then contact your volunteer manager for the correct URL.</div>
                    </div>
                </div>
                <div className="row--spacer">
                    <div className="col">
                        <form className="v--form" onSubmit={handleSubmit} >
                            <div className="row--spacer">
                                <div className="form--group">
                                    <label className="col-sm" htmlfor="input_username">Username</label>
                                    <div className="col-m">
                                        <input type="text" id="input_username" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="form--control" />
                                    </div>
                                </div>

                                <div className="form--group">
                                    <label className="col-sm" htmlfor="input_password">Password</label>
                                    <div className="col-m">
                                        <input type="text" id="input_password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="form--control" />
                                    </div>
                                </div>

                                <div className="form--group">
                                    <div className="col-mc">
                                        <input type="checkbox" id="input_anti-spam" name="input_anti-spam" className="form--check" />
                                        <b className="checker--text">To the Best of My Knowledge, I Am NOT a Robot</b>
                                    </div>
                                </div>

                                <div className="form--group">
                                    <div className="col-mc">
                                        <button type="submit" className="btn">Sign in</button>
                                    </div>
                                </div>

                            </div>
                        </form>
                        <div className="row--spacer"></div>
                        <hr className="form--end" />
                    </div>
                </div>
                <footer className="login-footer">
                    <div className="row">
                        <div className="col-lg-8">
                            <p className="login-footer--text">
                                Copyright &copy; 2023 by
                                <a href="#"> Web Voyage Tech, Inc. </a>
                                |
                                <a href="#"> Jaxsonville Web Development</a>
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <p className="login-footer--text">
                                2023-08-08 11:50PM EST | v1.0.0
                            </p>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    );
}