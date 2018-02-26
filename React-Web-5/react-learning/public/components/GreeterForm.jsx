import React from 'react';

class GreeterForm extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit(e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message
    }
    // this passes it up the chain 'lifting state' to its parent to handle
    this.props.onNewData(updates);
  }

  render () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter Name" />
        </div>
        <div>
          <textarea ref="message" placeholder="Enter Message" ></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

/* ES5
var GreeterForm = React.createClass({

  onFormSubmit: function(e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message
    }

    // this passes it up the chain 'lifting state' to its parent to handle
    this.props.onNewData(updates);

  },

  render: function() {
    return(
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter Name" />
        </div>
        <div>
          <textarea ref="message" placeholder="Enter Message" ></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }

});
*/


module.exports = GreeterForm;
