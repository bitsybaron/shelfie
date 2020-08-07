import React, {Component} from 'react';
import Product from '../Product/Product'

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }
    render() {
        console.log(this.props)
        const inventoryMap = this.props.inventory.map((product, index) => {
           return <Product key={index} product={product}/>
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