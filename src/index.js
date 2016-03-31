import React from 'react'
import ReactDOM from 'react-dom'

//Components
import Hello from './components/hello'
import World from './components/world'

const App = () => {
  return (
    <div>
      <Hello/>
      <World/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'))
