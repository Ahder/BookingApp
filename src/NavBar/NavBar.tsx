import React from 'react';
import {Link} from "react-router-dom";

/*
<Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
    <Tab label="Login" component={Link} to="/login"/>
    <Tab label="Book" component={Link} to="/station" {...a11yProps(1)} />
    <Tab label="User Panel" component={Link} to="/user"{...a11yProps(2)} />*/

export class NavBarCustom extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            stations: []
        };
    }


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user">User panel</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/station">Booking</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

}



