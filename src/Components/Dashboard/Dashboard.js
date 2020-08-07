import React, {Component} from 'react';
import Product from '../Product/Product'
import axios from 'axios';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            
        }
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    deleteProduct = (id) => {
        axios.delete(`/api/product/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        this.props.getInventory();
        
    }

    render() {
        console.log(this.props)
        const inventoryMap = this.props.inventory.map((product, index) => {
           return <Product key={index} product={product} deleteProduct={this.deleteProduct}/>
        })
        return(
            <div>
                Dashboard
                {inventoryMap}
            </div>
        )
    }
}

export default Dashboard;