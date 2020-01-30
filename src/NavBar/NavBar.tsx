import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

export class NavBar extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            connected: false
        };
        this.updateStatus = this.updateStatus.bind(this);
    }

    async updateStatus(status: boolean) {
        this.setState({connected: status});
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
                        {!this.props.loggedIn &&<li className="nav-item active">
                            <Button>
                                <Link to="/login">Login</Link>
                            </Button>
                        </li>}
                        {this.props.loggedIn && <li className="nav-item">
                            <Button>
                            <Link to="/user">User panel</Link>
                            </Button>
                        </li>}
                        {this.props.loggedIn && <li className="nav-item">
                            <Button>
                            <Link to="/station">Booking</Link>
                            </Button>
                        </li>}
                    </ul>
                </div>
            </nav>
        );
    }

}



