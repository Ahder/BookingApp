import React from 'react';
import InputComp from "../InputComp/InputComp";
import Item from "../ListingComp/Item";

export class SearchStation extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            departure: "",
            arrival: ""
        };
        this.setStations = this.setStations.bind(this);
    }


    async setStations(depFromChild: any, arrivFromChild: any) {
        this.setState({departure: depFromChild, arrival: arrivFromChild});
    }

    render() {
        return (
            <div>
                <InputComp setStations={this.setStations}/>
                {(this.state.departure && this.state.arrival) && <Item departure={this.state.departure} arrival={this.state.arrival} promo={this.props.promo}/>}
            </div>
        );
    }

}
