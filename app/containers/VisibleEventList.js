import { connect } from 'react-redux'
import { toggleEvent } from '../actions'
import EventList from '../components/EventList'

const dummyData = [{
  id: 0,
  name: 'NSDonut',
  description: 'Putting the O back in iOS',
  location: 'Seattle',
  startDate: 'Dec 31, 2016',
  endDate: 'Jan 1, 2017'
}]

const getVisibleEvents = (events, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return events || dummyData
    case 'SHOW_PAST_EVENTS':
      return events.filter((t) => t.completed)
    case 'SHOW_CURRENT_EVENTS':
      return events.filter((t) => !t.completed)
    default:
      return events || dummyData
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
