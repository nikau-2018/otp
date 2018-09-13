import React from 'react'
import request from 'superagent'

export default class Test extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: ['cant connect to db']
    }
  }

  componentDidMount () {
    this.getUsers()
      .then(users => {
        this.setState({users})
      })
      .catch(err => this.setState({err: err.message}))

  }

  getUsers () {
    return request.get('/api/v1/users')
      .then(res => {
        return res.body.users
      })
  }

  render () {
    return (
      <div>
        {
          this.state.err
            ? <h3>{this.state.err}</h3>
            : this.state.users.map(n => <h3 key={n.id}>{n.name}</h3>)
        }
      </div>
    )
  }
}
