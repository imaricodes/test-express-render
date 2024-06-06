import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='text-red-600'>

        Home
      <Link to="/About">
        <button>
          About
        </button>
      </Link>


    </div>
  )
}

export default Home