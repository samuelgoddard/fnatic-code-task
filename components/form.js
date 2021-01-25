import React, { useState } from 'react'
import styles from './form.module.css'
import SubmitButton from '../components/submit-button'
import TextField from '../components/text-field'
import cn from 'classnames'

export default function Form() {
  
  // Set the default form state
  const [values, setValues] = useState({
    username: '', 
    password: '',
    fname: '',
    lname: '',
    email: '',
    telephone: '',
    address: '',
    city: '',
    zip: '',
  })

  // Update form state handler
  const handleInputChange = e => {
    const {name, value} = e.target
    setValues({...values, [name]: value})
  }

  // On form submit alert the current form state values
  const onSubmit = () => {
    alert(JSON.stringify(values));
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>      
      {/* Login Details Fieldset */}
      <fieldset className={styles['form-group']}>
        <div className={styles['form-group__item']}>
          <legend>Login Details:</legend>
        </div>
        <div className={cn(styles['form-group__item'], styles['form-group__item--half'])}>
          <TextField
            label="Username"
            name="username"
            value={values.username}
            changeHandler={handleInputChange}
            required
          />
        </div>
        <div className={cn(styles['form-group__item'], styles['form-group__item--half'])}>
          <TextField
            type="password"
            label="Password"
            name="password"
            value={values.password}
            changeHandler={handleInputChange}
            required
            minLength={8}
          />
        </div>
      </fieldset>

      {/* Contact Details Fieldset */}
      <fieldset className={styles['form-group']}>
        <div className={styles['form-group__item']}>
          <legend>Contact Details:</legend>
        </div>
        <div className={cn(styles['form-group__item'], styles['form-group__item--half'])}>
          <TextField
            label="First Name"
            name="fname"
            value={values.fname}
            changeHandler={handleInputChange}
            required
          />
        </div>
        <div className={cn(styles['form-group__item'], styles['form-group__item--half'])}>
          <TextField
            label="Last Name"
            name="lname"
            value={values.lname}
            changeHandler={handleInputChange}
            required
          />
        </div>
        <div className={styles['form-group__item']}>
          <TextField
            type="email"
            label="Email"
            name="email"
            value={values.email}
            changeHandler={handleInputChange}
            required
          />
        </div>
        <div className={styles['form-group__item']}>
          <TextField
            type="tel"
            label="Telephone"
            name="telephone"
            value={values.telephone}
            changeHandler={handleInputChange}
            required
          />
        </div>
      </fieldset>

      {/* Address Details Fieldset */}
      <fieldset className={styles['form-group']}>
        <div className={styles['form-group__item']}>
          <legend>Address Details:</legend>
        </div>
        <div className={styles['form-group__item']}>
          <TextField
            label="Address"
            name="address"
            value={values.address}
            changeHandler={handleInputChange}
            required
          />
        </div>
        <div className={cn(styles['form-group__item'], styles['form-group__item--half'])}>
          <TextField
            label="City"
            name="city"
            value={values.city}
            changeHandler={handleInputChange}
            required
          />
        </div>
        <div className={cn(styles['form-group__item'], styles['form-group__item--half'])}>
          <TextField
            label="Zip Code"
            name="zip"
            value={values.zip}
            changeHandler={handleInputChange}
            required
          />
        </div>
      </fieldset>

      <SubmitButton primary>Submit Form</SubmitButton>
    </form>
  )
}