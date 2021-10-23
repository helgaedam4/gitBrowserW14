import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './header'

const Repolist = () => {
  const { userName } = useParams()
  const [repo, setRepo] = useState([])

  useEffect(() => {
    axios(`https://api.github.com/users/${userName}/repos`)
      .then(({ data }) => data)
      .catch((err) => err)
      .then((r) => setRepo(r))
      .catch((err) => err)
  }, [userName])

  return (
    <div>
      <Header repositoryName={userName} />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-400 text-white font-bold rounded-lg border p-10">
          <ul>
            {repo.map((it) => {
              return (
                <li key={it.id}>
                  <Link to={`/${userName}/${it.name}`}>{it.name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

Repolist.propTypes = {}

export default Repolist
