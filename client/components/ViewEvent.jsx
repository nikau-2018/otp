import React from 'react'

const ViewEvent = (props) => (
  <div className='container'>
    <h1 className='row'>{props.event}</h1>
    <p className='row'>{props.description}</p>
    <div className='row'>
      <div>
        <select>
          <option value="guestname">Guest names</option>
        </select>
      </div>

      <div className='col-6'>
        <input type="checkbow" id="ingredient"/>
        {/* <p>{ingredient}</p>
        add price later */}
      </div>

    </div>
  </div>
)

export default ViewEvent
