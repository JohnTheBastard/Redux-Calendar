import React from 'react'
import { reset } from 'redux-form'
import { connect } from 'react-redux'
import { addEvent } from '../actions'
import AddEventForm from '../components/AddEventForm'

let AddEvent = ({ dispatch }) => {
  return (
    <div className='AddEvent'>
      <AddEventForm onSubmit={(values) => {
        dispatch(addEvent(
          values.name,
          values.description,
        //  values.photo,
        //  values.tags.split(','),
          values.startDate,
          values.endDate
        ))
        dispatch(reset('AddEventForm'))
      }} />
    </div>
  )
}

AddEvent = connect()(AddEvent)
export default AddEvent
