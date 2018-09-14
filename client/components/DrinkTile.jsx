import React from 'react'

export default class CreateEvent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: false
    }
  }
  
  toggleSelected = () => {
    this.state.selected
      ? this.props.callback('del', this.props.drink.idDrink)
      : this.props.callback('add', this.props.drink.idDrink)
    this.setState({selected: !(this.state.selected)})
  }

  render () {
    const drink = this.props.drink
    return (
          <span className={this.state.selected ? 'selected' : ''} onClick={this.toggleSelected}>
            <span>{drink.strDrink}</span>
            <img src={drink.strDrinkThumb} />
          </span>
    )
  }
}
