import React, { useState } from 'react'
import { history } from '../redux'

const Main = () => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="text-black font-bold rounded-lg border shadow-lg p-10 bg-indigo-400 text-lightgrey font-bold rounded-lg border m-15">
          <input
            type="text"
            id="input-field"
            className="rounded-lg border p-2 m-2 items-center justify-center inline-block"
            value={value}
            onChange={onChange}
          />

          <button
            type="button"
            id="search-button"
            className="rounded-lg p-2 m-4 items-center justify-center bg-indigo-600 text-white "
            onClick={() => history.push(`/${value}`)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
