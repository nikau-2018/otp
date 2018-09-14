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
          <Route path='/event/:id' component={ViewEventContainer} />
          <Route path='/event/add' component={CreateEvent} />
        </div>
      </Router>
    </div>
  )
}

export default App
