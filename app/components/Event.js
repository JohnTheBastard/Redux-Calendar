import React, { PropTypes } from 'react'

const Event = ({ name, description, location,
              // tags, photo,
                 startDate, endDate}) =>
   <div className='Event'>
     <h2>{name}</h2>
     <p className='description'>
       {description}
     </p>
     <div className='times'>
       <p><b>From:</b> {startDate} &nbsp;&nbsp; <b>To:</b> {endDate}</p>
     </div>
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
