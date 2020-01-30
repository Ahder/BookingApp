import React from 'react';


export default class BasketComp extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }


    render() {
        return (
            <div>
                <h1>My Basket</h1>
                {this.props.promo ? <p>Promo enabled</p> : <p>No Promo</p>}
            </div>
        );
    }
}

