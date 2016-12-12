import React from 'react'

//TODO: this is all wrong for our purposes
const Event = ({ onClick, completed, text }) =>
  <li
    onClick={onClick}
    className={completed ? 'completed-task' : 'incomplete-task'}
  >
    {text}
  </li>

const propTypes = {
  onClick: React.PropTypes.func.isRequired,
  completed: React.PropTypes.bool.isRequired,
  text: React.PropTypes.string.isRequired
}

export default Object.assign(Todo, propTypes)
