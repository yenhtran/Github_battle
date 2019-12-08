import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

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
      <div>
        Hello World!
      </div>
    )
  }
}

ReactDom.render(
  // React element,
  <App />,
  // Where to render to the Element to
  document.getElementById('app')
)