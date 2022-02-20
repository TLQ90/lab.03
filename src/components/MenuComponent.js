import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import DishDetail from  './DishdetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
        this.onDishSelect=this.onDishSelect.bind(this)
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id}  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-10 m-1">
                      <DishDetail dish = {this.state.selectedDish}/>
                  </div>
                </div>
            </div>
        );
    }
}


export default Menu;