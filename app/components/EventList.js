import React, { PropTypes } from 'react'
import Event from './Event'

const EventList = ({ events, onEventClick }) =>
  <ul>
    {events.map((event) =>
      <Event
        key={event.id}
        {...event}
        onClick={() => onEventClick(event.id)}
      />
    )}
  </ul>

const propTypes = {  // TODO: prop shapes?
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    repeating: PropTypes.string.isRequired,   // TODO: bool isn't right, needs interval
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onEventClick: PropTypes.func.isRequired
}

export default Object.assign(EventList, propTypes)
