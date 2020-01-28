import React from 'react';
import InputComp from "../InputComp/InputComp";
import ListingComp from "../ListingComp/ListingComp";


export class SearchStation extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            stations: []
        };
        this.setGares = this.setGares.bind(this);
    }

    async setGares(gares: any) {
        this.setState({stations: gares});
    }

    render() {
        return (
            <div>
                <InputComp setGares={this.setGares}/>
                <ListingComp stations={this.state.stations}/>
            </div>
        );
    }

}
