import React from 'react'

export default class CreateEvent extends React.Component {
  render () {
    const drink = this.props.drink
    return (
      <div>
        {
          <div className='drink-tile'>
            <h3>{drink.strDrink}</h3>
            <img src={drink.strDrinkThumb} />
          </div>
        }
      </div>
    )
  }
}
