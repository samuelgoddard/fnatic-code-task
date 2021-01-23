import React, { useState } from 'react';
import styles from './form.module.css'
import Button from '../components/button'
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
          <label
            htmlFor="username"
            className={isUsernameActive ? cn(styles.label, styles.active): styles.label}
          >Username</label>
          <input
            type="text"
            name="username"
            className={styles.input}
            value={username}
            onChange={handleChange}
            required
          />
        </div>
        <div className={cn(styles['form-group__item'], styles['form-group__item--half'])}>
          <label
            htmlFor="password"
            className={isPasswordActive ? cn(styles.label, styles.active): styles.label}
          >Password</label>
          <input
            type="password"
            name="password"
            minLength="8"
            className={styles.input}
            value={password}
            onChange={handleChange}
            required
          />
        </div>
      </fieldset>

      {/* Contact Details Fieldset */}
      <fieldset className={styles['form-group']}>
        <div className={styles['form-group__item']}>
          <legend>Contact Details:</legend>
        </div>
        <div className={cn(styles['form-group__item'], styles['form-group__item--half'])}>
          <label
            htmlFor="fname"
            className={isFnameActive ? cn(styles.label, styles.active): styles.label}
          >First Name</label>
          <input
            type="text"
            name="fname"
            className={styles.input}
            value={fname}
            onChange={handleChange}
            required
          />
        </div>
        <div className={cn(styles['form-group__item'], styles['form-group__item--half'])}>
          <label
            htmlFor="lname"
            className={isLnameActive ? cn(styles.label, styles.active): styles.label}
          >Last Name</label>
          <input
            type="text"
            name="lname"
            className={styles.input}
            value={lname}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles['form-group__item']}>
          <label
            htmlFor="email"
            className={isEmailActive ? cn(styles.label, styles.active): styles.label}
          >Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            className={styles.input}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles['form-group__item']}>
          <label
            htmlFor="email"
            className={isTelephoneActive ? cn(styles.label, styles.active): styles.label}
          >Telephone</label>
          <input
            type="tel"
            name="telephone"
            value={telephone}
            className={styles.input}
            onChange={handleChange}
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
          <label
            htmlFor="address"
            className={isAddressActive ? cn(styles.label, styles.active): styles.label}
          >Address</label>
          <input
            type="text"
            name="address"
            value={address}
            className={styles.input}
            onChange={handleChange}
            required
          />
        </div>
        <div className={cn(styles['form-group__item'], styles['form-group__item--half'])}>
          <label
            htmlFor="cite"
            className={isCityActive ? cn(styles.label, styles.active): styles.label}
          >City</label>
          <input
            type="text"
            name="city"
            className={styles.input}
            value={city}
            onChange={handleChange}
            required
          />
        </div>
        <div className={cn(styles['form-group__item'], styles['form-group__item--half'])}>
          <label
            htmlFor="zip"
            className={isZipActive ? cn(styles.label, styles.active): styles.label}
          >Zip Code</label>
          <input
            type="text"
            name="zip"
            className={styles.input}
            value={zip}
            onChange={handleChange}
            required
          />
        </div>
      </fieldset>

      <Button primary>Submit Form</Button>
    </form>
  )
}