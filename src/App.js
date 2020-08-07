import React, {Component} from 'react';

import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';


class App extends Component {
  constructor(){
    super();
    this.state = {
        inventory: [],
        editObj: {
          
        }
    }
    this.getInventory = this.getInventory.bind(this)
    this.selectProduct = this.selectProduct.bind(this)
  }

  getInventory = () => {
    axios.get('/api/inventory')
      .then(res => this.setState({inventory: res.data}))
      .catch(err => console.log(err))
  }

  selectProduct = (obj) => {
      this.setState({editObj: obj})
      console.log(this.state.editObj)
  }

  render(){
    this.getInventory();
    return (
      <div className="App">
          <Header />
          <Dashboard inventory={this.state.inventory} getInventory={this.getInventory} selectProduct={this.selectProduct}/>
          <Form getInventory={this.getInventory} editObj={this.state.editObj}/>
      </div>
    )
  }
}

export default App;