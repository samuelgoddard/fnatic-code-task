import PropTypes from 'prop-types'
import styles from './button.module.css'
import cn from 'classnames'

export default function SubmitButton({primary, children}) {
  return (
    <button
      type="submit"
      className={
        cn(styles['btn'],{ 
          [styles['btn--primary']]: primary
        })
      }
    >
      {children}
    </button>
  )
}

SubmitButton.propTypes = {
  // primary theme modifier (updates styling)
  primary: PropTypes.bool,
  // The buttons child node 
  children: PropTypes.node.isRequired,
};
