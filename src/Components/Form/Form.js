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

    updateProduct = (id, name, price, img) => {
        axios.put(`/api/products/${id}`, {name, price, img})
        .then(res => {
            console.log(res)
            this.setState({
                imageUrl: '',
                productName: '',
                price: 0,
                
            })
        }).catch(err => console.log(err))
        this.props.getInventory();
    }

    addProduct = () => {
        const {productName, price, imageUrl} = this.state
        axios.post('/api/product', {productName, price, imageUrl})
            .then(() => {
                this.setState({
                    imageUrl: '',
                    productName: '',
                    price: 0,
                    
                })
            })
            .catch(err => console.log(err))
        this.props.getInventory();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.editObj !== this.props.editObj) {
            this.setState({
                imageUrl: this.props.editObj.img,
                productName: this.props.editObj.name,
                price: this.props.editObj.price
            })

            
            
        }
    }
    render() {
        
        return(
            <div>
                Image url:<input value={this.state.imageUrl} name="imageUrl" onChange={this.universalHandler}/>
                Name:<input value={this.state.productName} name="productName" onChange={this.universalHandler}/>
                Price:<input value={this.state.price} name="price" onChange={this.universalHandler}/>
                <button onClick={this.resetState}>Cancel</button>
                
                <button onClick={() => {
                    
                    this.updateProduct(this.props.editObj.id, this.state.productName, this.state.price, this.state.imageUrl)
                    console.log(this.props.editObj.id, this.state.productName, this.state.price, this.state.imageUrl, "help")}}>Save Changes</button>
                <button onClick={this.addProduct}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form;