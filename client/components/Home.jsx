import React from 'react'
import {Link} from 'react-router-dom'
import request from 'superagent'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      parties: []
    }
    this.getAllParties = this.getAllParties.bind(this)
  }

  getAllParties () {
    return request.get('/api/v1/parties')
      .then(res => {
        return res.body.parties
      })
  }

  componentDidMount () {
    this.getAllParties()
      .then(parties => {
        this.setState({parties})
      })
  }

  render () {
    return (
      <div className='container'>
        <h1>On The Poseidon</h1>
        <h2>Events:</h2>
        <div className='row'>
          {this.state.parties.map((party) => {
            return <Link key={party.id} to={`/event/${party.id}`}>
              <span>{party.description}</span><br/>
              <span>{party.hostName}</span>
            </Link>
          })}
        </div>
        <div className='events'>
        </div>
      </div>
    )
  }
}

export default Home
