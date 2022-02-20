import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends React.Component {
    constructor(props) {
        super(props);

    }





    render() {
        if (this.props.dish != null) {
            return (
                <div className='row'>
                    <Card className="col-6">
                        <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                    <Card className="col-6">
                        { this.props.dish.comments.map(c => (
                            <div key={c.id}>
                                <p>--{c.author}</p>
                                <p>{c.comment}</p>
                                <p>{c.date}</p>
                            </div>
                        ))}
                    </Card>
                </div>
            );
        } else
            return (
                <div></div>
            );
    }
}

export default DishDetail; 