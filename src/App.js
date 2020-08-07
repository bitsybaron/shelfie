import React, {Component} from 'react';

import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

class App extends Component {
  constructor(){
    super();
    this.state = {
        inventory: [
          {
            name: 'dress',
            price: 90,
            image: 'urlhere'
          },
          {
            name: 'boots',
            price: 233,
            image: 'urlthere'
          },
          {
            name: 'skirt',
            price: 333,
            image: 'you ush'
          }
        ]
    }
  }
  render(){
    return (
      <div className="App">
          <Header />
          <Dashboard inventory={this.state.inventory}/>
          <Form />
      </div>
    )
  }
}

export default App;