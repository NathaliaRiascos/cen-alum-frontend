import React from 'react';
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import classNames from 'classnames'
import './Input.css'

const Input = ({ label, name, value, type, handleChange, disable, hide }) => (
  <TextField
    className={classNames('input', {
      ['type-disable']: disable,
      ['type-hide']: hide
    })}
    id='outlined-name'
    type={type}
    name={name}
    label={label}
    value={value}
    margin='normal'
    disabled={disable}
    onChange={handleChange}
  />
)

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number', 'search', 'password']),
    name: PropTypes.string,
    value: PropTypes.node,
    hide: PropTypes.bool,
    disable: PropTypes.bool,
    handleChange: PropTypes.func
}

Input.defaultProps = {
    type: 'text',
    label: 'text',
    disable: false
}

export default Input