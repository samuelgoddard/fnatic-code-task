import PropTypes from 'prop-types'
import styles from './meta-text.module.css'

export default function MetaText({ children }) {
  return <span className={styles['meta-text']}>{ children }</span>
}

MetaText.propTypes = {
  // The meta-text child node 
  children: PropTypes.node.isRequired,
};