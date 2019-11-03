import React from 'react'

import User from '../../components/User'

const authIndexPage = props => {
  return (
    <div className='container' id='id_main'>
      <h1>The Auth Index Page</h1>
      <User name='Max' age={28} />
    </div>
  )
}

export default authIndexPage
