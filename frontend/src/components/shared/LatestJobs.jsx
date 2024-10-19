import React from 'react'
import Cards from './Cards';
const jobs=[1,2,3,4,4,5,6,7,8,9];
const LatestJobs = () => {
  return (
    <div className='border p-4'>
      <h1 className='text-3xl font-bold'>Job Openings</h1>
      <div className='grid grid-cols-3 my-5 gap-3'>
        {jobs.slice(0,6).map((mp,idx)=>< Cards key={idx}/>)}
      </div>
    </div>
  )
}

export default LatestJobs