import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {SearchStation} from "./SearchStation/SearchStation";


import {BrowserRouter as Router, Route} from "react-router-dom";
import {UserPanel} from "./UserPanel/UserPanel";
import {NavBar} from "./NavBar/NavBar";
import LoginComp from "./LoginComp/LoginComp";

export default function App() {

    const [loggedIn, setLoggedIn] = useState(
        // initial value
        document.cookie.split(';').some((item) => item.trim().startsWith('logedIn=')));

    const [email, setEmail] = useState(
        // initial value
        document.cookie.split(';').some((item) => item.trim().startsWith('email=')));

    return (
        <div>
            <Router>
                <NavBar {...{loggedIn, email}}/>
                <div>
                    <Route exact path="/login" render={
                        (routeProps) => <LoginComp {...{setLoggedIn, setEmail, ...routeProps}} />
                    }/>
                    <Route exact path="/station" component={SearchStation}/>
                    <Route exact path="/user" render={
                        (routeProps) => <UserPanel {...{email, ...routeProps}}/>}/>
                </div>
            </Router>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
