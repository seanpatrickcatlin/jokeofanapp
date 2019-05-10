;(() => {
  const jokeDisplayElementClassName = 'joke-display-element'
  const jokeFetchButtonClassName = 'joke-fetch-button'

  const getJokeButton = () => {
    return document.querySelector(`.${jokeFetchButtonClassName}`)
  }

  const getJokeElement = () => {
    return document.querySelector(`.${jokeDisplayElementClassName}`)
  }

  let jokeText = 'hi'

  const updateContent = () => {
    const jokeElement = getJokeElement()
    if (!jokeElement) {
      return
    }
    jokeElement.innerHTML = jokeText
  }

  const refreshJoke = () => {
    fetch('https://icanhazdadjoke.com/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'User-agent':
          'jokeofanapp web-vanilla-js (https://github.com/seanpatrickcatlin/jokeofanapp)',
      },
    })
      .then(response => response.json())
      .then(({ joke }) => {
        jokeText = joke
        updateContent()
      })
  }

  window.addEventListener('DOMContentLoaded', event => {
    const jokeButton = getJokeButton()

    if (!jokeButton) {
      return
    }

    jokeButton.addEventListener('click', refreshJoke)
  })
})()
