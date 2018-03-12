class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options: []
    }
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item.'
      // -1 means it found a match...
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists.'
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option) // we use .concat so we don't amend anything
      }
    })
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    console.log(option)

  }

  render() {
    const title = 'Indecision'
    const subtitle = 'Let me handle your task.'

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}/>
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}/>
        <AddOption
          handleAddOption={this.handleAddOption}/>
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
  render() {
    return (
      <div>
        <button onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}>
          What should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
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
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault()
    // .trim() method cleans out useless spaces before and after a given string.
    // more research on .trim()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    this.setState(() => {
      return { error }
    })
    e.target.elements.option.value = ''
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name='option'/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}




ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
