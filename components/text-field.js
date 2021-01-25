import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './form.module.css'
import cn from 'classnames'

export default function TextField({ label, type, name, required, minLength, changeHandler }) {

  // Here i make an "active" state for the label, if the field value *isn't* empty the label will stay pinned to the top of the input to allow the value to be seen, if it is empty it'll animate back to the default position
  const [currentlyActive, setCurrentlyActive] = useState(false);

  const activeUpdate = e => {
    const {value} = e.target
    value !== '' ? setCurrentlyActive(true) : setCurrentlyActive(false)
  }

  return (
    <>
      <label
        htmlFor={name}
        className={currentlyActive ? cn(styles['is--active']) : null}
      >{label}</label>
      <input
      type={type}
        name={name}
        onInput={activeUpdate}
        onChange={changeHandler}
        required={required}
        { ...( minLength && { minLength: `${minLength}` } )}
      />
    </>
  )
}

TextField.propTypes = {
  // The text label of the text-field
  label: PropTypes.string.isRequired,
  // The type of text-field (eg: [type="tel"], defaults to 'text')
  type: PropTypes.string,
  // The name of the text-field
  name: PropTypes.string.isRequired,
  // Whether or not this text-field is 'required', defaults to 'false'
  required: PropTypes.bool,
  // Whether or not this text-field has a 'minLength' requirement
  minLength: PropTypes.number,
  // The function this text-field should run onChange
  changeHandler: PropTypes.func
};

TextField.defaultProps = {
  type: "text",
  required: false
};