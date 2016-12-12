const event = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return {   //TODO: needs photo and tags
        id: action.id,
        name: action.name,
        description: action.description,
        location: action.location,
        startDate: action.startDate,
        endDate: action.endDate,
        repeating: action.repeating
      }
    case 'TOGGLE_EVENT':
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        //TODO: What goes here?
//        completed: !state.completed
      })
    default:
      return state
  }
}

const events = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [
        ...state,
        event(undefined, action)
      ]
    case 'TOGGLE_EVENT':
      return state.map((t) => event(t, action))
    default:
      return state
  }
}

export default events
