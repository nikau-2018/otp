import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

// Components
import ViewEventContainer from './ViewEventContainer'
import Home from './Home'

const App = () => {
  return (
    <div className='app'>
      <Router>
        <div>
          <Route exact path='/' component ={Home} />
          <Route path='/parties/:id' component={ViewEventContainer} />
        </div>
      </Router>
    </div>
  )
}

export default App
