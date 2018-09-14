import React from 'react'
import ViewEvent from './ViewEvent'

class ViewEventContainer extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {

  //   }
  // }
  render () {
    return (
      <div>
        <h1>Your Event</h1>
        <ViewEvent />
      </div>
    )
  }
}

export default ViewEventContainer
