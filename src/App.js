import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import NewCharacter from './components/NewCharacter'
import './App.css'

// Replace your code here
class App extends Component {
  state = {characterList: [], input: ''}

  onChangeInput = event => {
    this.setState({
      input: event.target.value,
    })
  }

  onSubmitCharacter = event => {
    event.preventDefault()
    const {input} = this.state

    const newCharacter = {
      id: uuidv4(),
      name: input,
      charLength: input.length,
    }
    this.setState(prevState => ({
      characterList: [...prevState.characterList, newCharacter],
      input: '',
    }))
  }

  render() {
    const {characterList, input} = this.state
    const listLength = characterList.length === 0

    return (
      <div className="main-container">
        <div className="sub-card">
          <div className="left-card">
            <h1 className="count-head">Count the characters like a Boss...</h1>

            {listLength ? (
              <div className="no-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="no-user"
                />
              </div>
            ) : (
              <ul className="list-container">
                {characterList.map(each => (
                  <NewCharacter key={each.id} characterDetails={each} />
                ))}
              </ul>
            )}
          </div>

          <div className="right-card">
            <h1 className="character-head">Character Counter</h1>
            <form className="input-card" onSubmit={this.onSubmitCharacter}>
              <input
                type="text"
                placeholder="Enter the Characters here"
                className="input"
                value={input}
                onChange={this.onChangeInput}
              />
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
