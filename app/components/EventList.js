import React from 'react'
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

const propTypes = {  //TODO: prop shapes
  events: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    completed: React.PropTypes.bool.isRequired,
    text: React.PropTypes.string.isRequired
  }).isRequired).isRequired,
  onEventClick: React.PropTypes.func.isRequired
}

export default Object.assign(EventList, propTypes)
