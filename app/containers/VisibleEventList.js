import { connect } from 'react-redux'
import { toggleEvent } from '../actions'
import EventList from '../components/EventList'

const getVisibleEvents = (events, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return events
    case 'SHOW_PAST_EVENTS':
      return events.filter((t) => t.completed)
    case 'SHOW_CURRENT_EVENTS':
      return events.filter((t) => !t.completed)
    default:
      return events
  }
}

const mapStateToProps = (state) => {
  return {
    events: getVisibleEvents(state.events, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEventClick: (id) => dispatch(toggleEvent(id))
  }
}

const VisibleEventList = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList)

export default VisibleEventList
