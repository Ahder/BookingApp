import React from 'react';

export class UserPanel extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <p id="email" className="makeGreen">Email: {this.props.email}</p>
            </div>);
    }

}

