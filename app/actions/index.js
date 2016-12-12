import uuid from 'uuid'

export const addEvent = (name, description, location, startDate, endDate, repeating) => {
  return {
    type: 'ADD_EVENT',
    id: uuid.v4(),
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
