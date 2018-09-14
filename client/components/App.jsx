import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

// Components
import ViewEventContainer from './ViewEventContainer'
import CreateEvent from './CreateEvent'
import Home from './Home'

const App = () => {
  return (
    <div className='app'>
      <Router>
        <div>
          <Route exact path='/' component ={Home} />
          <Route exact path='/event/:id' component={ViewEventContainer} />
          <Route exact path='/event/create' component={CreateEvent} />
        </div>
      </Router>
    </div>
  )
}

export default App
