import React from 'react'
import request from 'superagent'

import DrinkTile from './DrinkTile'

export default class CreateEvent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hostName: 'George',
      description: 'Description here',
      guests: ['Emma, Lauren'],
      drinks: [],
      selected: ["16419", "14107", "16405", "15597", "14229"]
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
    this.sendForm()
  }

  callbackSelected = (action, id) => {
    const selected = [...this.state.selected]
    switch (action) {
      case 'add':
      console.log('add',action, id)
        this.setState({selected: selected.push(id)})
        break;
      case 'del':
      console.log('del',action, id)
        this.setState({selected: selected.filter(drink => selected.idDrink !== id)})
        break;
    }
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
      <div>
        {
          this.state.err
            ? <h3>{this.state.err}</h3>
            : this.state.drinks.map(drink => <span key={drink.idDrink}><DrinkTile drink={drink} callback={this.callbackSelected}/></span>)
        }
      </div>
    )
  }
}
