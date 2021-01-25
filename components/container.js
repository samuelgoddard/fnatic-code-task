import PropTypes from 'prop-types'
import styles from './container.module.css'

export default function Container({ children }) {
  return <div className={styles['container']}>{children}</div>
}

Container.propTypes = {
  // The containers child node
  children: PropTypes.node.isRequired,
};
