import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


export default class Item extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            price: 20
        }
    }

    render() {
        return (
            <Card>
                <CardContent>
                    <p> Departure : {this.props.departure}</p>
                    <p> Arrival : {this.props.arrival}</p>
                    <p> Price : {this.props.promo ?  this.state.price-10 : this.state.price}</p>
                </CardContent>
                <CardActions>
                    <Button size="small">Add to basket</Button>
                </CardActions>
            </Card>
        );
    }
}
