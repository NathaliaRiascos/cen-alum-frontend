import * as React from 'react';
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField';
import classNames from 'classnames'

const TextArea = ({ label, value, handleChange, disable, size }) => (
  <TextField
    className={classNames('textArea', {
        'type-disable': disable,
        [`type-${size}`]: size
    })}
    id='outlined-multiline-static'
    label={label}
    multiline
    value={value}
    disabled={disable}
    onChange={e => handleChange(e.target.value)}
  />
)

TextArea.propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number']),
    size: PropTypes.oneOf(['small', 'wider', 'medium', 'big']),
    disable: PropTypes.bool
}

TextArea.defaultProps = {
    type: 'text',
    label: 'text',
    size: 'small',
    disable: false
}

export default TextArea