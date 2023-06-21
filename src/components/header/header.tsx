import Logo from '../logo/logo'
import styles from '../../styles/header.module.scss'

export default function Header() {
  return (
    <div className={styles.header} aria-label='Header' role='banner'>
      <Logo isFullLogo />
    </div>
  )
}
