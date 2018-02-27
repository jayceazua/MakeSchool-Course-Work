import React from 'react'


class Category extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    var value = e.target.innerHTML
    this.props.onNewDisplayCategory(value)
  }

  render() {
    return (
        <button className="btn btn-info" onClick={this.handleClick}>
          {this.props.category}
        </button>
    )
  }
}

export default Category
