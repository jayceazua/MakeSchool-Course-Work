import React from 'react';
import './App.css';
// Data and Categories from Database
import inventory, { categories } from './database/inventory'
// Components
import Product from './components/Product'
import Category from './components/Category'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ''
    }
    this.handleNewDisplayCategory = this.handleNewDisplayCategory.bind(this)
  }
  handleNewDisplayCategory(value) {
    // works - I lifted state properly
    this.setState({
    category: value
    })
  }

  render() {
    const item = inventory.map((item) => {
      let id = item.id
      let name = item.name
      let category = item.category
      let description = item.description
      let price = item.price

      if (category === this.state.category) {
        return (
          <Product key={id} name={name} category={category} description={description} price={price}/>
        )
      } else if (this.state.category === '') {
        return (
          <Product key={id} name={name} category={category} description={description} price={price}/>
        )
      }



    })
    const category = categories.map((category, index) => {
      return (
        <Category key={index} category={category} onNewDisplayCategory={this.handleNewDisplayCategory}/>
      )
    })

    return (

      <div className="App">

        <div>
          {category}
          <button className="btn btn-warning">All</button>
        </div>

        <div className="product-container">
          {item}
        </div>

      </div>
    );
  }
}



export default App;
