import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-indigo-400 p-6">
      <div id="go-back" className="block text-white hover:text-white hover:border-white">
        <Link to="/">Go back</Link>
      </div>
    </nav>
  )
}

export default React.memo(Header)
