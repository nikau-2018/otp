import React from 'react'

const ViewEvent = (props) => (
  <div className='container'>
    <h1 className='row'>{props.event}</h1>
    <p className='row'>{props.description}</p>
    <div className='row'>
      <div>

      </div>

      <div className='col-6'>
        <input type="checkbow" id="ingredient"/>
        <p>{ingredient}</p>
        {/* add price later */}
      </div>

    </div>
    <button id={props.id} onClick={e => deleteWord(e, props.dispatch)}>Delete</button>
    {props.word}
  </div>
)

export default ViewEvent
