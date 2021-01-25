import styles from './meta-text.module.css'

export default function MetaText({ children }) {
  return <span className={styles['meta-text']}>{ children }</span>
}