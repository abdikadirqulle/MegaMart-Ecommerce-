import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className="bg-Heading text-White w-full h-screen flex flex-col gap-10 justify-center items-center">
      <div className="flex gap-4 border p-4 shadow-md rounded">
        <h1 className="text-3xl font-bold">404</h1>
        <h1 className="text-3xl font-bold">| </h1>
        <p className="text-3xl font-bold">not found</p>
      </div>
      <Link to="/" className="text-2xl font-bold underline hover:bg-Text">
        Go Back
      </Link>
    </div>
  );
}

export default Error404