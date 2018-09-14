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
        this.setState({drinksAll: drinks})
        this.randomiseDrinks(drinks)
      })
      .catch(err => this.setState({err: err.message}))
  }

  getAllDrinks () {
    return request.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      .then(res => {
        return res.body.drinks
      })
  }

  randomiseDrinks (drinks) {
    const indexSet = new Set()
    while (indexSet.size < 20) {
      indexSet.add(drinks[Math.floor(Math.random() * (drinks.length - 1)) + 1])
    }
    this.setState({drinks: [...indexSet]})
  }

  callbackSelected = (action, id) => {
    let selected = []
    switch (action) {
      case 'add':
        selected = [...this.state.selected]
        selected.push(id)
        break;
      case 'del':
    }
    this.setState({selected})
  }

  sendForm = () => {
    const state = this.state
    const formData = {
      hostName: state.hostName,
      description: state.description,
      guests: state.guests.join(", "),
      drinks: state.selected
    }
    console.log(JSON.stringify(formData))
    request.post('/api/v1/parties')
      .send(formData)
      .then(res => {
        console.log('body', res.body)
        console.log('res', res)
      })
  }

  render () {
    return (
      <div className='container'>
      <span className='d-flex flex-wrap'>
        {
          this.state.drinks.map(drink => <span className='tile' key={drink.idDrink}><DrinkTile drink={drink} callback={this.callbackSelected}/></span>)
        }
      </span>
      </div>
    )
  }
}
