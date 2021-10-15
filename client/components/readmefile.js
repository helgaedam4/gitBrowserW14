import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import Header from './headerr'

const Readmefile = () => {
  const { userName, repositoryName } = useParams()
  const [repo, setRepo] = useState([])

  useEffect(() => {
    axios(`https://api.github.com/repos/${userName}/${repositoryName}/readme`)
      .then(({ data }) => data)
      .catch((err) => err)
      .then((r) => {
        axios(r.download_url)
          .then(({ data }) => setRepo(data))
          .catch((err) => err)
      })
      .catch((err) => err)
  }, [userName, repositoryName])

  return (
    <div id="description">
      <Header repositoryName={userName} />
      <ReactMarkdown>{repo}</ReactMarkdown>
    </div>
  )
}

Readmefile.propTypes = {}

export default Readmefile
