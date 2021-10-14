import { useState } from  'react'
import PropTypes from 'prop-types';

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);


    const handleChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

   const handleSubmit = e => {
    e.preventDefault();
   }

    return {
        values,
        handleChange,
        handleSubmit
    }

}

useForm.propTypes = {
    children: PropTypes.object
}