import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className="bg-Heading text-White w-full h-screen flex flex-col gap-10 justify-center items-center">
      <div className='-space-y-10'>

      <div className="flex flex-col items-center gap-4 border p-4 shadow-md rounded">
        <h1 className="text-3xl font-bold">404 | </h1>
      </div>
      <div className="flex flex-col items-center gap-4 border p-4 shadow-md rounded">
        <p className="text-3xl font-bold">page not found</p>
      </div>
      </div>
      <Link to="/" className="text-2xl font-bold  hover:bg-Text">
        <span className='underline'>Go Back</span>
      </Link>
    </div>
  );
}

export default Error404