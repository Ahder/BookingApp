import React, {Component} from "react";
import {LoginCall} from "./LoginCall";

export default class LoginComp extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            email: "",
            password: "",
            status: null
        };
        this.lunchLogin = this.lunchLogin.bind(this);
    }

    async lunchLogin() {
        let isConnected = await LoginCall(this.state.email, this.state.password) || false;
        return isConnected ? this.setState({status: true}) : this.setState({status: false});
    }

    render() {
        return (
            <div>
                {!this.state.status && <form>
                    <h3>Login</h3>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                               onChange={e => this.setState({email: e.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                               onChange={e => this.setState({password: e.target.value})}/>
                    </div>
                    <button type="button" className="btn btn-primary btn-block" onClick={this.lunchLogin}>Submit
                    </button>
                </form>}
                <p>{this.state.status ? "Connected !" : ""}</p>
            </div>
        );
    }
}
