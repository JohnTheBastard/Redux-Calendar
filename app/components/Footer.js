import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () =>
  <p>
    Show:
    {' '}
    <FilterLink filter='SHOW_ALL'>
      All
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_PAST_EVENTS'>
      Past Events
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_CURRENT_EVENTS'>
      Future Events
    </FilterLink>
  </p>

export default Footer
