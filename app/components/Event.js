import React, { PropTypes } from 'react'

const Event = ({ name, description, location,
              // tags, photo,
                 startDate, endDate}) =>
   <div className='Event'>
     <h3>{name}</h3>
     <div className='times'>
       <p>Start Date: {startDate}</p>
       <p>End Date: {endDate}</p>
     </div>
     <p className='description'>
       {description}
     </p>
   </div>

const propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  // tags: PropTypes.array,
  // photo: PropTypes.string,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired
}

export default Object.assign(Event, { propTypes })
