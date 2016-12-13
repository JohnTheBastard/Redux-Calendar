import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import Events from './Events'
import VisibilityFilter from './VisibilityFilter'

const CalendarApp = combineReducers({
  form: formReducer,
  Events,
  VisibilityFilter
})

export default CalendarApp
