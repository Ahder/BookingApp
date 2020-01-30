import React from 'react';

export class UserPanel extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.onChangePromo = this.onChangePromo.bind(this);
    }

    async onChangePromo(e: any) {
        await this.props.setPromo(e.target.checked);
    }

    render() {
        return (
            <div>
                <p id="email" className="makeGreen">Email: {this.props.email}</p>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked={this.props.promo} id="defaultCheck1"
                           onChange={this.onChangePromo}/>
                    <label className="form-check-label" htmlFor="defaultCheck1">
                        Promo
                    </label>
                </div>
            </div>);
    }

}

