import React, { PropTypes } from 'react'
import Event from './Event'

const EventList = ({ events }) =>
  <main className='EventList'>
    {events.map((event) =>
      <Event
        key={event.id}
        {...event}
     // onClick={() => onEventClick(event.id)}
      />
    )}
  </main>

const propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  //  tags: PropTypes.array,
  //  photo: PropTypes.string,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired
  //  repeating: PropTypes.string.isRequired,   // TODO: bool isn't right, needs interval
  //  completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}

export default Object.assign(EventList, { propTypes })
