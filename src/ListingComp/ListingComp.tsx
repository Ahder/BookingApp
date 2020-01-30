import React from 'react';

export default class ListingComp extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Liste des gares</h1>
                <ul className="list-group">
                    {this.props.stations.map((value: any, index: any) => {
                        return <button type="button" className="list-group-item list-group-item-action">{value}</button>

                    })}
                </ul>
            </div>
        );
    }
}
