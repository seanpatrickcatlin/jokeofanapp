import React from 'react';

class JokeBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      joke: ''
    }
  }

  componentDidMount() {
    this.fetchNewJoke()
  }

  fetchNewJoke = () => {
    fetch('https://icanhazdadjoke.com/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'User-agent': 'jokeofanapp web-rect (https://github.com/seanpatrickcatlin/jokeofanapp)'
      }
    }).then(response => response.json())
    .then(({joke}) => {
this.setState({
  joke
})    })
  }

  render() {
    return (
      <div>
        <h3>Papa Bless</h3>
        <h4>{this.state.joke}</h4>
        <button onClick={this.fetchNewJoke}>pooe</button>
      </div>
    )
  }
}

export default JokeBox