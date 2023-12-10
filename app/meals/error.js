"use client"
import React from 'react'

const Error = ({error}) => {
  return (
    <main className='error'>
      <h1>An error occurred!</h1>
      <p>Failed to Fatch meal data. Please try again later.</p>
    </main>
  )
}

export default Error