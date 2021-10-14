import React from 'react'
import { Route } from 'react-router-dom'
import Repolist from './repolist'
import Main from './main'
import Readmefile from './readmefile'

const Dummy = () => {
  return (
    <div>
      <Route exact path="/" component={() => <Main />} />
      <Route exact path="/:userName" component={() => <Repolist />} />
      <Route exact path="/:userName/:repositoryName" component={() => <Readmefile />} />
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
