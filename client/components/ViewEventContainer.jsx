import React from 'react'
import request from 'superagent'

// Components
import ViewEvent from './ViewEvent'

class ViewEventContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      party: {},
      guests: [],
      ingredients: [{name: 'lime', claimed: true},
        {name: 'rum', claimed: true},
        {name: 'coke', claimed: true},
        {name: 'salt', claimed: true},
        {name: 'lime', claimed: true},
        {name: 'bourbon', claimed: true},
        {name: 'gin', claimed: true},
        {name: 'vodka', claimed: true},
        {name: 'vermouth', claimed: true},
        {name: 'martini', claimed: true},
        {name: 'ice', claimed: true},
        {name: 'tonic water', claimed: true}
      ]
    }
  }

  getParty () {
    const partyId = Number(this.props.match.params.id)
    return request.get(`/api/v1/parties/${partyId}`)
      .then(res => {
        return res.body.party
      })
  }

  componentDidMount () {
    this.getParty()
      .then(party => {
        this.setState({party})
      })
      .then(() => this.setState({guests: this.state.party.guests.split(', ')}))
  }

  render () {
    return (
      <div className='container'>
        <h1 className="row justify-content-center" style={{textAlign: 'center'}}>{this.state.party.host_name}'s Event</h1>
        <ViewEvent host={this.state.party.host_name}
          description={this.state.party.description}
          guests={this.state.guests}
          ingredients={this.state.ingredients}
        />
      </div>
    )
  }
}

export default ViewEventContainer
