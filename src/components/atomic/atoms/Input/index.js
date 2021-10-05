import React from 'react';
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import classNames from 'classnames'
import './Input.css'

const Input = ({ label, value, type, handleChange, disable }) => (
  <TextField
    className={classNames('input', { 'type-disable': disable })}
    id='outlined-name'
    type={type}
    label={label}
    value={value}
    disabled={disable}
    onChange={e => handleChange(e.target.value)}
  />
)

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number', 'search', 'password']),
    disable: PropTypes.bool,
    handleChange: PropTypes.func
}

Input.defaultProps = {
    type: 'text',
    label: 'text',
    disable: false
}

export default Input