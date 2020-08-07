import React, {Component} from 'react';

class Product extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render() {
        const {product} = this.props;
        return(
            <div>
                <p>Name: {product.name}</p>
                <p>Price: {product.price}</p>
                <p>Image: {product.image}</p>
                <button onClick={() => this.props.selectProduct(product)}>Edit</button>
                <button onClick={() => this.props.deleteProduct(product.id)}>Delete</button>
            </div>
        )
    }
}

export default Product;