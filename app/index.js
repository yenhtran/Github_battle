import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'

/**
 * React Component Aspects (3)
 * - State
 * - Lifecycle
 * - UI
 */
class App extends React.Component {
  render() {
    return (
      /**
       * Babel converts below JSX to:
       *  return React.createElement(
       *    'div',
       *    null,
       *    'Hello World!'
       *  )
       */
      <div className='container'>
        <Popular />
      </div>
    )
  }
}

ReactDOM.render(
  // React element,
  <App />,
  // Where to render to the Element to
  document.getElementById('app')
)