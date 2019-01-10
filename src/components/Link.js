import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return( 
    <button className={'chipActive'}>
      <span className={'filterTextActive'}>{children}</span>
    </button>);
  }

  return (
    <button className={'chip'}
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      <span className={'filterText'}>{children}</span>
    </button>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link