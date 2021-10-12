import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Main</div>
          <Link to="/dashboard">   Go To Root</Link>
          <Link to="/dashboard/profile/47843c32-d666-4487-ab6c-139b9cbfbbc2">   Go To Profile</Link>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
