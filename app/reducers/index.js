import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import Events from './events'
import VisibilityFilter from './visibilityFilter'

const CalendarApp = combineReducers({
  form: formReducer,
  Events,
  VisibilityFilter
})

export default CalendarApp
