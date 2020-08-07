import React, {Component} from 'react';
import axios from 'axios';


class Form extends Component {
    constructor(){
        super();
        this.state = {
            imageUrl: '',
            productName: '',
            price: 0

        }
        this.universalHandler = this.universalHandler.bind(this)
        this.resetState = this.resetState.bind(this)
    }

    universalHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    resetState = () => {
        this.setState({
            imageUrl: '',
            productName: '',
            price: 0
        })
        console.log(this.state)
    }

    addProduct = () => {
        const {productName, price, imageUrl} = this.state
        axios.post('/api/product', {productName, price, imageUrl})
            .then(() => {
                this.setState({
                    imageUrl: '',
                    productName: '',
                    price: 0
                })
            })
            .catch(err => console.log(err))
        this.props.getInventory();
    }

    render() {
        return(
            <div>
                Form
                <input value={this.state.imageUrl} name="imageUrl" onChange={this.universalHandler}/>
                <input value={this.state.productName} name="productName" onChange={this.universalHandler}/>
                <input value={this.state.price} name="price" onChange={this.universalHandler}/>
                <button onClick={this.resetState}>Cancel</button>
                <button onClick={this.addProduct}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form;