import React from 'react'

class ViewEvent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount () {
    // get the claimed status from db and store in state
  }

  render () {
    return (
      <div className='container'>
        <p className="row justify-content-center" style={{textAlign: 'center'}}>{this.props.description}</p>
        <div>
          <div className="row justify-content-center" style={{textAlign: 'center'}}>
            <p>What is your name? </p>
            <select>
              {this.props.guests.map((guest, i) => {
                return <option key={i} value={`${guest}`}>{guest}</option>
              })}
            </select>
          </div>

          <div className='col-6'>
            <p>What will you bring to the party??????</p>
            {this.props.ingredients.map((ingredient, i) => {
              return (
                // style will toggle depending on drink claimed/not
                <div style={{display: 'inline'}}>
                  <input key={i} type="checkbox" id={`${ingredient.name}`} value={`${ingredient.name}`}/>
                  <label key={i} htmlFor={`${ingredient.name}`}>{`${ingredient.name}`}</label><br/>
                </div>
              )
            })}

            {/* <p>{ingredient}</p>
        add price later */}
          </div>

        </div>
      </div>
    )
  }
}
export default ViewEvent
