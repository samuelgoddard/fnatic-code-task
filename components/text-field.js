import PropTypes from 'prop-types';
import styles from './form.module.css'
import cn from 'classnames'

export default function TextField({label, value, changeHandler, type, name, active, required, minLength}) {
  return (
    <>
      <label
        htmlFor={name}
        className={active ? cn(styles.label, styles['is--active']): styles.label}
      >{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        className={styles.input}
        onChange={changeHandler}
        required={required}
        { ...( minLength && { minLength: `${minLength}` } )}
      />
    </>
  )
}

TextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  changeHandler: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  active: PropTypes.bool,
  required: PropTypes.bool,
  minLength: PropTypes.number
};

TextField.defaultProps = {
  type: "text",
  required: false,
  active: false
};
