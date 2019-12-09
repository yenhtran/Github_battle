import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Popular from './components/Popular'

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

ReactDom.render(
  // React element,
  <App />,
  // Where to render to the Element to
  document.getElementById('app')
)