import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-indigo-400 p-6 font-bold">
      <div
        id="repository-name"
        className="text-white hover:text-white hover:border-white  inline-block"
      >
        {`${props.repositoryName}`}
      </div>
      <div id="go-back" className="text-white hover:text-white hover:border-white  inline-block">
        <Link to="/">Go back</Link>
      </div>
    </nav>
  )
}

export default React.memo(Header)
