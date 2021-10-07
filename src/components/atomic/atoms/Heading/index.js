import React from 'react'
import './Heading.css'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Heading = ({ children, typeHeading }) => (
  <>
    {
     typeHeading === 'h1'?
       <h1 className={classNames('heading', {
        [`type-${typeHeading}`]: typeHeading
      })}>{children}</h1>
    :
       <h2 className={classNames('heading', {
        [`type-${typeHeading}`]: typeHeading
      })}>{children}</h2>
    }
  </>
)

Heading.propTypes = {
    children: PropTypes.node.isRequired,
    typeHeading: PropTypes.oneOf(['h1', 'h2']),
}

export default Heading