class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision'
    const subtitle = 'Let me handle your task.'
    const options = ['Thing one', 'Thing two', 'Thing four']
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handlePick')
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick} >What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    alert('handleRemoveAll')
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll} >Remove All</button>
        {
          this.props.options.map((option, index) => <Option key={index} optionText={option}/>)
        }
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

class AddOption extends React.Component {
  handleSubmit(e) {
    e.preventDefault()
    // .trim() method cleans out useless spaces before and after a given string.
    // more research on .trim()
    const option = e.target.elements.option.value.trim()
    if (option) {
      alert(option)
      e.target.elements.option.value = ''
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name='option'/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}




ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
