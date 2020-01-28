import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {SearchStation} from "./SearchStation/SearchStation";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {UserPanel} from "./UserPanel/UserPanel";
import NavBar from "./NavBar/NavBar";
import LoginComp from "./LoginComp/LoginComp";

export default function App() {
    return (
        <div>
            <Router>
                <NavBar/>
                <div>
             {/*       <nav>
                        <ul>
                            <li>
                                <Link to="/station">Search station</Link>
                            </li>
                            <li>
                                <Link to="/user">User</Link>
                            </li>
                        </ul>
                    </nav>*/}

                    <Route exact path="/login" component={LoginComp}/>
                    <Route exact path="/station" component={SearchStation}/>
                    <Route exact path="/user" component={UserPanel}/>
                </div>
            </Router>
        </div>
    );
}


ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
