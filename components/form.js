import React, { useState } from 'react';
import styles from './form.module.css'
import SubmitButton from '../components/submit-button'
import TextField from '../components/text-field'
import cn from 'classnames'

export default function Form() {
  const [username,setUsername] = useState('');
  const [isUsernameActive, setIsUsernameActive] = useState(false);
  const [password,setPassword] = useState('');
  const [isPasswordActive, setIsPasswordActive] = useState(false);
  const [fname,setFname] = useState('');
  const [isFnameActive, setIsFnameActive] = useState(false);
  const [lname,setLname] = useState('');
  const [isLnameActive, setIsLnameActive] = useState(false);
  const [email,setEmail] = useState('');
  const [isEmailActive, setIsEmailActive] = useState(false);
  const [telephone,setTelephone] = useState('');
  const [isTelephoneActive, setisTelephoneActive] = useState(false);
  const [address,setAddress] = useState('');
  const [isAddressActive, setisAddressActive] = useState(false);
  const [city,setCity] = useState('');
  const [isCityActive, setisCityActive] = useState(false);
  const [zip,setZip] = useState('');
  const [isZipActive, setisZipActive] = useState(false);

  const handleChange = e => {
    const {name, value} = e.target

    if (name === 'username' ){
      setUsername(value)
      value !== '' ? setIsUsernameActive(true) : setIsUsernameActive(false)
    }
    if (name === 'password' ){
      setPassword(value)
      value !== '' ? setIsPasswordActive(true) : setIsPasswordActive(false)
    }
    if (name === 'fname' ){
      setFname(value)
      value !== '' ? setIsFnameActive(true) : setIsFnameActive(false)
    }
    if (name === 'lname' ){
      setLname(value)
      value !== '' ? setIsLnameActive(true) : setIsLnameActive(false)
    }
    if (name === 'email' ){
      setEmail(value)
      value !== '' ? setIsEmailActive(true) : setIsEmailActive(false)
    }
    if (name === 'telephone' ){
      setTelephone(value)
      value !== '' ? setisTelephoneActive(true) : setisTelephoneActive(false)
    }
    if (name === 'address' ){
      setAddress(value)
      value !== '' ? setisAddressActive(true) : setisAddressActive(false)
    }
    if (name === 'city' ){
      setCity(value)
      value !== '' ? setisCityActive(true) : setisCityActive(false)
    }
    if (name === 'zip' ){
      setZip(value)
      value !== '' ? setisZipActive(true) : setisZipActive(false)
    }
  }

  return (
    <form className={styles.form}>
      {/* Login Details Fieldset */}
      <fieldset className={styles['form-group']}>
        <div className={styles['form-group__item']}>
          <legend>Login Details:</legend>
        </div>
        <div className={cn(styles['form-group__item'], styles['form-group__item--half'])}>
          <TextField
            label="Username"
            name="username"
            active={isUsernameActive}
            value={username}
            changeHandler={handleChange}
            required
          />
        </div>
        <div className={cn(styles['form-group__item'], styles['form-group__item--half'])}>
          <TextField
            type="password"
            label="Password"
            name="password"
            active={isPasswordActive}
            value={password}
            changeHandler={handleChange}
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
            active={isFnameActive}
            value={fname}
            changeHandler={handleChange}
            required
          />
        </div>
        <div className={cn(styles['form-group__item'], styles['form-group__item--half'])}>
          <TextField
            label="Last Name"
            name="lname"
            active={isLnameActive}
            value={lname}
            changeHandler={handleChange}
            required
          />
        </div>
        <div className={styles['form-group__item']}>
          <TextField
            type="email"
            label="Email"
            name="email"
            active={isEmailActive}
            value={email}
            changeHandler={handleChange}
            required
          />
        </div>
        <div className={styles['form-group__item']}>
          <TextField
            type="tel"
            label="Telephone"
            name="telephone"
            active={isTelephoneActive}
            value={telephone}
            changeHandler={handleChange}
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
            active={isAddressActive}
            value={address}
            changeHandler={handleChange}
            required
          />
        </div>
        <div className={cn(styles['form-group__item'], styles['form-group__item--half'])}>
          <TextField
            label="City"
            name="city"
            active={isCityActive}
            value={city}
            changeHandler={handleChange}
            required
          />
        </div>
        <div className={cn(styles['form-group__item'], styles['form-group__item--half'])}>
          <TextField
            label="Zip Code"
            name="zip"
            active={isZipActive}
            value={zip}
            changeHandler={handleChange}
            required
          />
        </div>
      </fieldset>

      <SubmitButton primary>Submit Form</SubmitButton>
    </form>
  )
}