import * as React from 'react';
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField';
import classNames from 'classnames'

const TextArea = ({ label, value, name, handleChange, disable, size }) => (
  <TextField
    className={classNames('textArea', {
      'type-disable': disable
    })}
    id='outlined-multiline-static'
    label={label}
    name={name}
    multiline
    value={value}
    disabled={disable}
    rows={size}
    onChange={handleChange}
  />
)

TextArea.propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number']),
    size: PropTypes.oneOf(['small', 'wider', 'medium', 'big']),
    disable: PropTypes.bool,
    name: PropTypes.string,
    value: PropTypes.node,
    handleChange: PropTypes.func
  
}

TextArea.defaultProps = {
    type: 'text',
    label: 'text',
    size: 'small',
    disable: false
}

export default TextArea