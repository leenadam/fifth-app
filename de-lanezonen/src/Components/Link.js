import React from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'

const Link = ({ dispatch, to, children }) => (
  <button onClick={() => dispatch(push(to))}><br />
    {children}<br /><br />
  </button>
)

export default connect()(Link)