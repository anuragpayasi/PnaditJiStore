import React from 'react'

const Heading = (props) => {
  return (
         <div className='mx-auto w-fit pt-0'>
                 <h2 className='text-4xl   xl:text-5xl font-semibold'><span className='text-amber-900'>{props.first}</span> {props.second}</h2>
                 
         </div>
  )
}

export default Heading