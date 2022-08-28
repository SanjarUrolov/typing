import React from 'react'
import { useLocation } from 'react-router-dom'

function Result() {
    let location=useLocation();
    console.log(location);
  return (
    <div className='result'>
      {/* <h1>{location.state.count}</h1> */}
    </div>
  )
}

export default Result