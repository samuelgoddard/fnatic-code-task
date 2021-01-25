import styles from './button.module.css'
import cn from 'classnames'

export default function Button({primary, children}) {
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
