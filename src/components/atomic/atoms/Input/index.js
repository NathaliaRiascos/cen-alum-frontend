import React from 'react';
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import classNames from 'classnames'
import './Input.css'

const Input = ({ label, name, value, type, handleChange, disable }) => (
  <TextField
    className={classNames('input', { 'type-disable': disable })}
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
    disable: PropTypes.bool,
    handleChange: PropTypes.func
}

Input.defaultProps = {
    type: 'text',
    label: 'text',
    disable: false
}

export default Input