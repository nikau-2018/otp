import React from 'react'
import request from 'superagent'

import DrinkTile from './DrinkTile'

export default class CreateEvent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hostName: '',
      description: '',
      guests: [],
      drinks: [],
      selected: []
    }
  }

  componentDidMount () {
    this.getAllDrinks()
      .then(drinks => {
        this.setState({drinks})
        this.randomiseDrinks()
      })
      .catch(err => this.setState({err: err.message}))
  }

  getAllDrinks () {
    return request.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      .then(res => {
        return res.body.drinks
      })
  }

  randomiseDrinks () {
    // const arr = [...this.state.drinks]
    
  }

  render () {
    return (
      <div>
        {
          this.state.err
            ? <h3>{this.state.err}</h3>
            : this.state.drinks.map(drink => <span key={drink.idDrink}><DrinkTile drink={drink} /></span>)
        }
      </div>
    )
  }
}
