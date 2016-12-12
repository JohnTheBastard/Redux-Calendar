let nextEventId = 0

export const addEvent = (name, description, location, startDate, endDate, repeating) => {
  return {
    type: 'ADD_EVENT',
    id: nextEventId++,
    name,
    description,
    location,
    startDate,
    endDate,
    repeating
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleEvent = (id) => {
  return {
    type: 'TOGGLE_EVENT',
    id
  }
}
