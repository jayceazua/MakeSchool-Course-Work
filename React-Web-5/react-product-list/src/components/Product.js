import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let name = this.props.name
    let description = this.props.description
    let category = this.props.category
    let price = this.props.price

    return (
        <span className="product">
          <h1>{name}</h1>
          <h4>{category}</h4>
          <p>{description}.</p>
          <p>{price}</p>
        </span>
    )
  }
}



export default Product
