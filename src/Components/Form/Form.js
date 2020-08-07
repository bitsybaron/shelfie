import React, {Component} from 'react';


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

    render() {
        return(
            <div>
                Form
                <input value={this.state.imageUrl} name="imageUrl" onChange={this.universalHandler}/>
                <input value={this.state.productName} name="productName" onChange={this.universalHandler}/>
                <input value={this.state.price} name="price" onChange={this.universalHandler}/>
                <button onClick={this.resetState}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}

export default Form;