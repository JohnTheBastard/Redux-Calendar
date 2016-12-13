const event = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return {
        id: action.id,
        name: action.name,
        description: action.description,
        location: action.location,
      //  tags: action.tags || [],
      //  photo: action.photo || '',
        startDate: action.startDate,
        endDate: action.endDate
      //  repeating: action.repeating
      }
//     case 'TOGGLE_EVENT':
//       if (state.id !== action.id) {
//         return state
//       }
//       return Object.assign({}, state, {
//         // TODO: What goes here?
// //        completed: !state.completed
//       })
    default:
      return state
  }
}

const Events = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [
        ...state,
        event(undefined, action)
      ]
    // case 'TOGGLE_EVENT':
    //   return state.map((t) => event(t, action))
    default:
      return state
  }
}

export default Events
