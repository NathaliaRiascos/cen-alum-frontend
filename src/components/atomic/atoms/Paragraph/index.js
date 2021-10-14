import './Paragraph.css'
import PropTypes from 'prop-types'

const Paragraph = ({ children }) => <p className='text'>{ children }</p>

Paragraph.propTypes = {
    children: PropTypes.node.isRequired
}

export default Paragraph