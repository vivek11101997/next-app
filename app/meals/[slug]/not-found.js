import React from 'react'

const NotFound = (props) => {
  console.log(props)
  return (
    <main className='not-found'>
      <h1>Meal Not Found</h1>
      <p>Unfortunately, we could not find the requested Meal</p>
    </main>
  )
}

export default NotFound