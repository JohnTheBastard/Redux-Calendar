import React from 'react'
import { Field, reduxForm } from 'redux-form'

const AddEventForm = ({ handleSubmit }) =>
  <form onSubmit={handleSubmit}>
    <div>
      <label>Event Name</label>
      <div>
        <Field name='name'
               placeholder='Event Name'
               component='input'
               type='text' />
      </div>
    </div>
    <div>
      <label>Event Description</label>
      <div>
        <Field name='description'
               placeholder='Description'
               component='textarea'
               type='text'  />
      </div>
    </div>
    <div>
      <label>Event Location</label>
      <div>
        <Field name='location'
               placeholder='Location'
               component='input'
               type='text'  />
      </div>
    </div>
    <div>
      <label>Event Start Date/Time</label>
      <div>
        <Field name='startDate'
               placeholder='Start Date'
               component='input'
               type='text'  />
      </div>
    </div>
    <div>
      <label>Event End Date/Time</label>
      <div>
        <Field name='endDate'
               placeholder='End Date'
               component='input'
               type='text'  />
      </div>
    </div>
    <input type='submit'
           value='Add Event' />
  </form>

export default reduxForm({
  form: 'AddEventForm'
})(AddEventForm)
