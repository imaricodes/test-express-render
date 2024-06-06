import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>

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