import React from 'react';
import {launchSncfRequest} from "../ListingComp/fncs";


export default class InputComp extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.onChangeInput = this.onChangeInput.bind(this);
    }


    async onChangeInput(e: any) {
        let gares = await launchSncfRequest(e.target.value) || [];
        await this.props.setGares(gares);
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <input className="form-control" type="text" id={"input-search"} onChange={this.onChangeInput}
                           placeholder="Enter le nom d'une gare/ville"/>
                </div>
            </form>
        );
    }
}

