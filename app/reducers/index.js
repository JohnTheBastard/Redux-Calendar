import { combineReducers } from 'redux'
import Events from './events'
import VisibilityFilter from './visibilityFilter'

const CalendarApp = combineReducers({
  Events,
  VisibilityFilter
})

export default CalendarApp
